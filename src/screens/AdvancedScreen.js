import React, { useState } from 'react';
import { View, Text } from 'react-native';
import HYDROBUDDY_DB from '../data/hydrobuddy-db';
import HYDROGUIDE_DATA from '../data/guide-data';
import I18N from '../engine/i18n';
import Solver from '../engine/solver';
import {
  Card,
  SectionTitle,
  Btn,
  Field,
  SelectField,
  KpiBox,
  Chip,
  styles as uiStyles
} from '../components/ui';

export default function AdvancedScreen({ appState, updateAppState, onNavigateTab, showToast }) {
  const [tissueId, setTissueId] = useState(HYDROBUDDY_DB.tissueProfiles[0].id);
  const [wue, setWue] = useState('3.5');
  const [nh4Pct, setNh4Pct] = useState('10');

  const [commId, setCommId] = useState(HYDROGUIDE_DATA.commercialProducts[0].id);
  const [commDose, setCommDose] = useState('2.0');

  const t = (k, f) => I18N.t(k, f);
  const fmt = (v, d = 2) => I18N.fmtNum(v, d);

  const tissueProfile =
    HYDROBUDDY_DB.tissueProfiles.find(p => p.id === tissueId) ||
    HYDROBUDDY_DB.tissueProfiles[0];
  const tissuePpm = Solver.convertTissueToPpm(tissueProfile, Number(wue) || 3.5, Number(nh4Pct) || 10);
  const tissueEc = Solver.calculatePredictedEC(tissuePpm, 'lmc');

  const commProduct =
    HYDROGUIDE_DATA.commercialProducts.find(p => p.id === commId) ||
    HYDROGUIDE_DATA.commercialProducts[0];
  const commResult = Solver.analyzeCommercialNutrient(commProduct.comp, Number(commDose) || 1.0);

  const handleLoadTissueToCalc = () => {
    updateAppState({
      targets: Object.assign({}, tissuePpm),
      result: null
    });
    showToast('Leaf tissue PPM loaded into Calculator');
    onNavigateTab('calc');
  };

  return (
    <View>
      {/* 1. Leaf Tissue WUE Converter */}
      <Card>
        <SectionTitle subtitle={t('adv_tissue_desc')}>{t('adv_tissue_title')}</SectionTitle>
        <View style={uiStyles.grid}>
          <SelectField
            label={t('lbl_select_tissue_crop')}
            value={tissueId}
            options={HYDROBUDDY_DB.tissueProfiles.map(p => ({
              value: p.id,
              label: I18N.tObj(p, 'name')
            }))}
            onChange={setTissueId}
            style={{ flex: 2 }}
          />
          <Field
            label={t('lbl_wue_input')}
            value={wue}
            keyboardType="numeric"
            onChangeText={setWue}
          />
          <Field
            label="NH₄⁺ % of Total N"
            value={nh4Pct}
            keyboardType="numeric"
            onChangeText={setNh4Pct}
          />
        </View>

        <View style={[uiStyles.row, { marginVertical: 10 }]}>
          <Chip tone="amber" label={`Predicted EC: ${fmt(tissueEc, 2)} mS/cm`} />
          {Solver.ELEMENT_ORDER.filter(k => tissuePpm[k] > 0).map(k => (
            <Chip
              key={k}
              label={`${k}: ${fmt(tissuePpm[k], tissuePpm[k] < 1 ? 3 : 1)} ppm`}
            />
          ))}
        </View>

        <Btn title={t('btn_load_tissue_to_calc')} onPress={handleLoadTissueToCalc} />
      </Card>

      {/* 2. Commercial Nutrient Converter */}
      <Card>
        <SectionTitle subtitle={t('adv_comm_desc')}>{t('adv_comm_title')}</SectionTitle>
        <View style={uiStyles.grid}>
          <SelectField
            label={t('lbl_select_comm_preset')}
            value={commId}
            options={HYDROGUIDE_DATA.commercialProducts.map(p => ({
              value: p.id,
              label: I18N.tObj(p, 'name')
            }))}
            onChange={id => {
              setCommId(id);
              const found = HYDROGUIDE_DATA.commercialProducts.find(x => x.id === id);
              if (found) setCommDose(String(found.doseDefault || 1.0));
            }}
            style={{ flex: 2 }}
          />
          <Field
            label={t('lbl_comm_dose_gl')}
            value={commDose}
            keyboardType="numeric"
            onChangeText={setCommDose}
          />
        </View>

        <View style={[uiStyles.grid, { marginVertical: 8 }]}>
          <KpiBox
            value={`${fmt(commResult.predictedEcLmc, 2)} mS/cm`}
            label="Predicted EC (LMCv2)"
          />
          <KpiBox
            value={`${fmt(commResult.predictedEcEmp, 2)} mS/cm`}
            label="Predicted EC (Empirical)"
          />
        </View>

        <View style={uiStyles.row}>
          {Solver.ELEMENT_ORDER.filter(k => commResult.ppm[k] > 0).map(k => (
            <Chip
              key={k}
              label={`${k}: ${fmt(commResult.ppm[k], commResult.ppm[k] < 1 ? 3 : 1)} ppm`}
            />
          ))}
        </View>

        <View style={[uiStyles.row, { marginTop: 10 }]}>
          <Btn
            small
            variant="secondary"
            title="Load Commercial PPM as Calculator Target"
            onPress={() => {
              updateAppState({ targets: Object.assign({}, commResult.ppm), result: null });
              showToast('Commercial nutrient PPM loaded into Calculator');
              onNavigateTab('calc');
            }}
          />
        </View>
      </Card>
    </View>
  );
}
