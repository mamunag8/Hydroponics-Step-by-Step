import React, { useState } from 'react';
import { View, Text } from 'react-native';
import HYDROBUDDY_DB from '../data/hydrobuddy-db';
import I18N from '../engine/i18n';
import Solver from '../engine/solver';
import {
  Card,
  SectionTitle,
  Btn,
  Field,
  SelectField,
  KpiBox,
  AlertBox,
  Chip,
  styles as uiStyles
} from '../components/ui';

const ACID_IDS = ['h3po4_75', 'h3po4_85', 'hno3_68', 'h2so4_98'];

export default function WaterScreen({ appState, updateAppState, onNavigateTab, showToast }) {
  const activeWater =
    HYDROBUDDY_DB.waterProfiles.find(w => w.id === appState.water.id) ||
    HYDROBUDDY_DB.waterProfiles[0];

  const [rawAlk, setRawAlk] = useState(String(activeWater.kh || 115));
  const [targetAlk, setTargetAlk] = useState('30');
  const [acidId, setAcidId] = useState('h3po4_85');
  const [volL, setVolL] = useState(() =>
    String(Solver.getEffectiveVolumeLiters(appState.params) || 100)
  );

  const t = (k, f) => I18N.t(k, f);
  const fmt = (v, d = 2) => I18N.fmtNum(v, d);

  const rawEc = Solver.calculatePredictedEC(activeWater.ions, 'lmc');
  const acidSubstance = HYDROBUDDY_DB.substances.find(s => s.id === acidId);

  const acidCalc = Solver.calculateAcidNeutralization({
    rawAlkalinityCaCO3: Number(rawAlk) || 0,
    targetAlkalinityCaCO3: Number(targetAlk) || 0,
    acidSubstance,
    volumeL: Number(volL) || 100
  });

  const handleSelectWater = wId => {
    const w = HYDROBUDDY_DB.waterProfiles.find(x => x.id === wId);
    if (!w) return;
    setRawAlk(String(w.kh || 0));
    updateAppState({
      water: { id: wId, acidAdd: {}, acidId: '', acidInfo: null },
      result: null
    });
  };

  const handleApplyToCalc = () => {
    updateAppState({
      water: {
        id: activeWater.id,
        acidAdd: acidCalc.addedElementPpm || {},
        acidId: acidSubstance ? acidSubstance.id : '',
        acidInfo: acidCalc
      },
      result: null
    });
    showToast('Water profile & pH acid applied to calculator');
    onNavigateTab('calc');
  };

  return (
    <View>
      <Card>
        <SectionTitle subtitle={t('water_subtitle')}>{t('water_title')}</SectionTitle>
        <View style={uiStyles.grid}>
          <SelectField
            label={t('lbl_select_water_preset')}
            value={activeWater.id}
            options={HYDROBUDDY_DB.waterProfiles.map(w => ({
              value: w.id,
              label: I18N.tObj(w, 'name')
            }))}
            onChange={handleSelectWater}
            style={{ flex: 2 }}
          />
          <KpiBox
            value={`${fmt(rawEc, 2)} mS/cm • pH ${fmt(activeWater.pH, 1)}`}
            label={t('lbl_water_ec')}
          />
        </View>

        <View style={[uiStyles.row, { marginVertical: 10 }]}>
          {Solver.ELEMENT_ORDER.filter(k => activeWater.ions[k] > 0).map(k => (
            <Chip key={k} label={`${k}: ${fmt(activeWater.ions[k], 2)} ppm`} />
          ))}
        </View>

        <View style={uiStyles.grid}>
          <Field
            label={t('lbl_water_alkalinity')}
            value={rawAlk}
            keyboardType="numeric"
            onChangeText={setRawAlk}
          />
          <Field
            label={t('lbl_target_alkalinity')}
            value={targetAlk}
            keyboardType="numeric"
            onChangeText={setTargetAlk}
          />
          <Field
            label="Reservoir Volume (Liters)"
            value={volL}
            keyboardType="numeric"
            onChangeText={setVolL}
          />
          <SelectField
            label={t('lbl_select_acid')}
            value={acidId}
            options={ACID_IDS.map(id => {
              const s = HYDROBUDDY_DB.substances.find(x => x.id === id);
              return { value: id, label: s ? I18N.tObj(s, 'name') : id };
            })}
            onChange={setAcidId}
          />
        </View>

        {acidCalc.alkToRemoveCaCO3 > 0 ? (
          <View style={{ marginTop: 10 }}>
            <View style={uiStyles.grid}>
              <KpiBox
                value={`${fmt(acidCalc.alkToRemoveCaCO3, 0)} mg/L`}
                label="CaCO₃ Alkalinity Neutralized"
              />
              <KpiBox value={`${fmt(acidCalc.acidMlPerLiter, 3)} mL/L`} label="Acid Dose per Liter" />
              <KpiBox
                value={`${fmt(acidCalc.totalAcidMl, 1)} mL (${fmt(acidCalc.totalAcidGrams, 1)} g)`}
                label={`Total Acid for ${volL} L`}
              />
            </View>
            <View style={[uiStyles.row, { marginTop: 8 }]}>
              <Text style={uiStyles.sub}>Elemental PPM Added by Acid:</Text>
              {Object.keys(acidCalc.addedElementPpm).map(k => (
                <Chip
                  key={k}
                  tone="amber"
                  label={`+${fmt(acidCalc.addedElementPpm[k], 1)} ppm ${k}`}
                />
              ))}
            </View>
          </View>
        ) : (
          <AlertBox type="success">
            Water alkalinity is already at or below target — no acid addition required.
          </AlertBox>
        )}

        <View style={[uiStyles.row, { marginTop: 12 }]}>
          <Btn title={t('btn_apply_water_to_calc')} onPress={handleApplyToCalc} />
        </View>
      </Card>
    </View>
  );
}
