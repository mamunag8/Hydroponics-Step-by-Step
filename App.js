import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  Platform,
  StatusBar as RNStatusBar
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

import HYDROBUDDY_DB from './src/data/hydrobuddy-db';
import I18N from './src/engine/i18n';
import Solver from './src/engine/solver';
import { COLORS, Btn, SelectField } from './src/components/ui';
import LanguageStudioModal from './src/components/LanguageStudioModal';
import PrivacyPolicyModal from './src/components/PrivacyPolicyModal';

import CalculatorScreen from './src/screens/CalculatorScreen';
import SubstancesScreen from './src/screens/SubstancesScreen';
import WaterScreen from './src/screens/WaterScreen';
import AdvancedScreen from './src/screens/AdvancedScreen';
import CropsScreen from './src/screens/CropsScreen';
import DoctorScreen from './src/screens/DoctorScreen';
import AcademyScreen from './src/screens/AcademyScreen';
import BusinessScreen from './src/screens/BusinessScreen';

const STORAGE_KEY = '@hydrobuddy_bd_native_state_v1';

const NAV_TABS = [
  { key: 'calc', icon: '🧪', labelKey: 'nav_calculator' },
  { key: 'substances', icon: '🧂', labelKey: 'nav_substances' },
  { key: 'water', icon: '💧', labelKey: 'nav_water_ph' },
  { key: 'advanced', icon: '🔬', labelKey: 'nav_advanced' },
  { key: 'crops', icon: '🌱', labelKey: 'nav_crops' },
  { key: 'doctor', icon: '🩺', labelKey: 'nav_doctor' },
  { key: 'academy', icon: '🎓', labelKey: 'nav_academy' },
  { key: 'business', icon: '📒', labelKey: 'nav_business' }
];

function getInitialAppState() {
  const defaultFormula = HYDROBUDDY_DB.formulations[0];
  const defaultSalts = HYDROBUDDY_DB.substances
    .filter(s => s.defaultSelected)
    .map(s => s.id);
  const waterProfile = HYDROBUDDY_DB.waterProfiles[0];

  const initialParams = {
    prepMode: 'direct',
    volume: 100,
    volumeUnit: 'L',
    stockVolumeL: 10,
    stockFactor: 100,
    ecModel: 'lmc',
    scalePrecisionG: 0.01
  };

  // Compute initial solver result out of the box so the user sees live weights immediately
  const selectedSubstances = HYDROBUDDY_DB.substances.filter(s =>
    defaultSalts.includes(s.id)
  );
  const initialResult = Solver.solveFormulationToWeights({
    targetPpm: defaultFormula.targets,
    waterPpm: waterProfile.ions,
    selectedSubstances,
    params: initialParams
  });
  const initialWeights = {};
  initialResult.saltResults.forEach(r => {
    initialWeights[r.substance.id] = r.weightG;
  });

  return {
    formulaId: defaultFormula.id,
    unit: 'ppm',
    targets: Object.assign({}, defaultFormula.targets),
    selectedSalts: defaultSalts,
    params: initialParams,
    calcMode: 'target',
    water: { id: waterProfile.id, acidAdd: {}, acidId: '', acidInfo: null },
    weights: initialWeights,
    result: initialResult,
    customSalts: [],
    customFormulas: [],
    logs: []
  };
}

export default function App() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 920;

  const [activeTab, setActiveTab] = useState('calc');
  const [appState, setAppState] = useState(getInitialAppState);
  const [studioOpen, setStudioOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [, setLangTick] = useState(0);

  // Load persisted native state on mount
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.lang) {
            I18N.setLang(parsed.lang);
          }
          if (parsed && parsed.useNativeDigits !== undefined) {
            I18N.setUseNativeDigits(parsed.useNativeDigits);
          }
          if (parsed && parsed.state) {
            setAppState(prev => Object.assign({}, prev, parsed.state));
          }
        }
      } catch (e) {}
    })();
  }, []);

  const persistState = async nextState => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          lang: I18N.getLang(),
          useNativeDigits: I18N.isUsingNativeDigits(),
          state: {
            formulaId: nextState.formulaId,
            unit: nextState.unit,
            targets: nextState.targets,
            selectedSalts: nextState.selectedSalts,
            params: nextState.params,
            water: nextState.water,
            customSalts: nextState.customSalts,
            customFormulas: nextState.customFormulas,
            logs: nextState.logs
          }
        })
      );
    } catch (e) {}
  };

  const updateAppState = patch => {
    setAppState(prev => {
      const next = Object.assign({}, prev, patch);
      persistState(next);
      return next;
    });
  };

  const showToast = msg => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg('');
    }, 2600);
  };

  const allLangs = I18N.getAllLanguages();
  const langOptions = Object.keys(allLangs).map(code => ({
    value: code,
    label: `${allLangs[code].flag || '🌐'} ${allLangs[code].nativeName}`
  }));

  const isRtl = (allLangs[I18N.getLang()]?.dir || 'ltr') === 'rtl';

  return (
    <SafeAreaView style={[styles.safeRoot, isRtl && { direction: 'rtl' }]}>
      <StatusBar style="light" backgroundColor={COLORS.g900} />

      {/* Top Native App Bar */}
      <View style={styles.header}>
        <View style={styles.brandWrap}>
          <View style={styles.logoBadge}>
            <Text style={{ fontSize: 20 }}>🌱</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle} numberOfLines={1}>
              {I18N.t('app_title')}
            </Text>
            {isDesktop ? (
              <Text style={styles.headerSub} numberOfLines={1}>
                {I18N.t('app_subtitle')}
              </Text>
            ) : null}
          </View>
        </View>

        <View style={styles.headerActions}>
          <SelectField
            value={I18N.getLang()}
            options={langOptions}
            onChange={code => {
              I18N.setLang(code);
              setLangTick(n => n + 1);
              persistState(appState);
            }}
            style={{ minWidth: 120, marginBottom: 0 }}
          />
          <Btn
            small
            variant="secondary"
            title={I18N.isUsingNativeDigits() ? 'সংখ্যা: ১২৩' : 'Digits: 123'}
            onPress={() => {
              I18N.toggleNativeDigits();
              setLangTick(n => n + 1);
              persistState(appState);
            }}
          />
          <Btn
            small
            variant="secondary"
            title="🌐 Language Studio"
            onPress={() => setStudioOpen(true)}
          />
          <Btn
            small
            variant="secondary"
            title="🛡️ 100% Ad-Free & Privacy"
            onPress={() => setPrivacyOpen(true)}
          />
        </View>
      </View>

      {/* Main Layout (Desktop Sidebar + Content OR Mobile Content + Bottom Bar) */}
      <View style={[styles.bodyWrap, isDesktop && styles.bodyWrapDesktop]}>
        {isDesktop ? (
          <View style={styles.sidebar}>
            {NAV_TABS.map(tab => {
              const active = activeTab === tab.key;
              return (
                <TouchableOpacity
                  key={tab.key}
                  onPress={() => setActiveTab(tab.key)}
                  style={[styles.sideItem, active && styles.sideItemActive]}
                >
                  <Text style={styles.sideIcon}>{tab.icon}</Text>
                  <Text style={[styles.sideLabel, active && styles.sideLabelActive]}>
                    {I18N.t(tab.labelKey)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}

        <ScrollView
          style={styles.mainScroll}
          contentContainerStyle={styles.mainScrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {activeTab === 'calc' ? (
            <CalculatorScreen
              appState={appState}
              updateAppState={updateAppState}
              showToast={showToast}
            />
          ) : null}
          {activeTab === 'substances' ? (
            <SubstancesScreen
              appState={appState}
              updateAppState={updateAppState}
              showToast={showToast}
            />
          ) : null}
          {activeTab === 'water' ? (
            <WaterScreen
              appState={appState}
              updateAppState={updateAppState}
              onNavigateTab={setActiveTab}
              showToast={showToast}
            />
          ) : null}
          {activeTab === 'advanced' ? (
            <AdvancedScreen
              appState={appState}
              updateAppState={updateAppState}
              onNavigateTab={setActiveTab}
              showToast={showToast}
            />
          ) : null}
          {activeTab === 'crops' ? (
            <CropsScreen
              updateAppState={updateAppState}
              onNavigateTab={setActiveTab}
              showToast={showToast}
            />
          ) : null}
          {activeTab === 'doctor' ? <DoctorScreen /> : null}
          {activeTab === 'academy' ? (
            <AcademyScreen onNavigateTab={setActiveTab} />
          ) : null}
          {activeTab === 'business' ? (
            <BusinessScreen
              appState={appState}
              updateAppState={updateAppState}
              showToast={showToast}
            />
          ) : null}

          <View style={styles.footer}>
            <Text style={styles.footerTxt}>
              Hydroponics Step by Step — Native iOS, Android & Web Edition • 100% Ad-Free & Zero Data Collected • Powered by HydroBuddy v1.100 (GPL-3.0) & BARI
            </Text>
            <TouchableOpacity onPress={() => setPrivacyOpen(true)} style={{ marginTop: 6 }}>
              <Text style={{ fontSize: 12, color: COLORS.g700, fontWeight: '700' }}>
                🛡️ View Privacy Policy & Data Safety Statement (গোপনীয়তা নীতি)
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Mobile Native Bottom Navigation Bar */}
      {!isDesktop ? (
        <View style={styles.bottomBar}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {NAV_TABS.map(tab => {
              const active = activeTab === tab.key;
              return (
                <TouchableOpacity
                  key={tab.key}
                  onPress={() => setActiveTab(tab.key)}
                  style={[styles.bottomItem, active && styles.bottomItemActive]}
                >
                  <Text style={styles.bottomIcon}>{tab.icon}</Text>
                  <Text
                    style={[styles.bottomLabel, active && styles.bottomLabelActive]}
                    numberOfLines={1}
                  >
                    {I18N.t(tab.labelKey)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      ) : null}

      {/* Universal Language Studio Modal */}
      <LanguageStudioModal
        visible={studioOpen}
        onClose={() => setStudioOpen(false)}
        onLanguageUpdated={() => {
          setLangTick(n => n + 1);
          persistState(appState);
        }}
      />

      {/* Privacy Policy & 100% Ad-Free Disclosure Modal */}
      <PrivacyPolicyModal
        visible={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

      {/* Toast Notification */}
      {toastMsg ? (
        <View style={styles.toast}>
          <Text style={styles.toastTxt}>{toastMsg}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeRoot: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight || 0 : 0
  },
  header: {
    backgroundColor: COLORS.g900,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10
  },
  brandWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    minWidth: 200
  },
  logoBadge: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '800'
  },
  headerSub: {
    color: '#dcfce7',
    fontSize: 12
  },
  headerActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 6
  },
  bodyWrap: {
    flex: 1
  },
  bodyWrapDesktop: {
    flexDirection: 'row'
  },
  sidebar: {
    width: 235,
    backgroundColor: '#ffffff',
    borderRightWidth: 1,
    borderRightColor: COLORS.line,
    paddingVertical: 10,
    paddingHorizontal: 8
  },
  sideItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 4
  },
  sideItemActive: {
    backgroundColor: COLORS.g100
  },
  sideIcon: {
    fontSize: 18
  },
  sideLabel: {
    fontSize: 14,
    color: COLORS.muted,
    fontWeight: '600',
    flex: 1
  },
  sideLabelActive: {
    color: COLORS.g900,
    fontWeight: '700'
  },
  mainScroll: {
    flex: 1
  },
  mainScrollContent: {
    padding: 14,
    maxWidth: 1140,
    width: '100%',
    alignSelf: 'center'
  },
  bottomBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: COLORS.line,
    paddingVertical: 4,
    paddingHorizontal: 6
  },
  bottomItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius: 10,
    minWidth: 78
  },
  bottomItemActive: {
    backgroundColor: COLORS.g100
  },
  bottomIcon: {
    fontSize: 18
  },
  bottomLabel: {
    fontSize: 11,
    color: COLORS.muted,
    fontWeight: '600',
    marginTop: 2
  },
  bottomLabelActive: {
    color: COLORS.g900,
    fontWeight: '700'
  },
  footer: {
    paddingVertical: 18,
    alignItems: 'center'
  },
  footerTxt: {
    fontSize: 12,
    color: COLORS.muted,
    textAlign: 'center'
  },
  toast: {
    position: 'absolute',
    bottom: 72,
    alignSelf: 'center',
    backgroundColor: '#111827',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 99
  },
  toastTxt: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600'
  }
});
