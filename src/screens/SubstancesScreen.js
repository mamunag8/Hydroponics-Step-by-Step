import React, { useState } from 'react';
import { View, Text, Share, StyleSheet } from 'react-native';
import HYDROBUDDY_DB from '../data/hydrobuddy-db';
import I18N from '../engine/i18n';
import Solver from '../engine/solver';
import {
  COLORS,
  Card,
  SectionTitle,
  Btn,
  Field,
  SelectField,
  Chip,
  styles as uiStyles
} from '../components/ui';

export default function SubstancesScreen({ appState, updateAppState, showToast }) {
  const [search, setSearch] = useState('');
  const [tankFilter, setTankFilter] = useState('all');
  const [showAdd, setShowAdd] = useState(false);

  const [nameBn, setNameBn] = useState('');
  const [nameEn, setNameEn] = useState('');
  const [formula, setFormula] = useState('');
  const [purity, setPurity] = useState('100');
  const [priceBdt, setPriceBdt] = useState('200');
  const [tank, setTank] = useState('A');
  const [compMap, setCompMap] = useState({});

  const t = (k, f) => I18N.t(k, f);
  const fmt = (v, d = 2) => I18N.fmtNum(v, d);

  const allSubstances = HYDROBUDDY_DB.substances.concat(appState.customSalts || []);
  const q = search.trim().toLowerCase();

  const filtered = allSubstances.filter(s => {
    const sTank = Solver.getSubstanceTank(s);
    if (tankFilter !== 'all' && sTank !== tankFilter) return false;
    if (!q) return true;
    return `${s.name_en || ''} ${s.name_bn || ''} ${s.formula || ''}`.toLowerCase().includes(q);
  });

  const handleSaveCustomSalt = () => {
    if (!nameEn.trim() && !nameBn.trim()) {
      showToast('Enter fertilizer name');
      return;
    }
    const comp = {};
    Solver.ELEMENT_ORDER.forEach(k => {
      const v = Number(compMap[k]) || 0;
      if (v > 0) comp[k] = v;
    });

    const newSalt = {
      id: 'custom_' + Date.now(),
      custom: true,
      name_en: nameEn.trim() || nameBn.trim(),
      name_bn: nameBn.trim() || nameEn.trim(),
      formula: formula.trim(),
      purity: Math.min(1, Math.max(0.01, (Number(purity) || 100) / 100)),
      concType: tank,
      isLiquid: false,
      density: 1.0,
      priceBDT: Number(priceBdt) || 0,
      priceUSD: Number(((Number(priceBdt) || 0) / 121).toFixed(2)),
      comp
    };

    const nextCustom = (appState.customSalts || []).concat([newSalt]);
    updateAppState({
      customSalts: nextCustom,
      selectedSalts: appState.selectedSalts.concat([newSalt.id])
    });
    setShowAdd(false);
    setNameBn('');
    setNameEn('');
    setFormula('');
    setCompMap({});
    showToast('Custom fertilizer added');
  };

  const handleExportDb = async () => {
    try {
      await Share.share({
        title: 'hydrobuddy-bd-substances.json',
        message: JSON.stringify(allSubstances, null, 2)
      });
    } catch (e) {}
  };

  return (
    <View>
      <Card>
        <SectionTitle subtitle={t('sub_subtitle')}>{t('sub_title')}</SectionTitle>
        <View style={uiStyles.grid}>
          <Field
            label={t('lbl_search_salts')}
            value={search}
            onChangeText={setSearch}
            placeholder="KNO3, Calcium, MKP..."
          />
          <SelectField
            label={t('col_tank')}
            value={tankFilter}
            options={[
              { value: 'all', label: 'All Tanks (A / B / 0)' },
              { value: 'A', label: 'Tank A (Ca & Fe)' },
              { value: 'B', label: 'Tank B (P, S & Micro)' },
              { value: '0', label: 'Tank 0 (Direct / Acid)' }
            ]}
            onChange={setTankFilter}
          />
        </View>
        <View style={uiStyles.row}>
          <Btn
            small
            title={t('btn_add_custom_salt')}
            onPress={() => setShowAdd(!showAdd)}
          />
          <Btn
            small
            variant="secondary"
            title={t('btn_export_salts')}
            onPress={handleExportDb}
          />
        </View>
      </Card>

      {showAdd ? (
        <Card>
          <SectionTitle>{t('btn_add_custom_salt')}</SectionTitle>
          <View style={uiStyles.grid}>
            <Field label={t('lbl_salt_name_bn')} value={nameBn} onChangeText={setNameBn} />
            <Field label={t('lbl_salt_name_en')} value={nameEn} onChangeText={setNameEn} />
            <Field label={t('lbl_salt_formula')} value={formula} onChangeText={setFormula} />
            <Field
              label={t('lbl_salt_purity')}
              value={purity}
              keyboardType="numeric"
              onChangeText={setPurity}
            />
            <Field
              label={t('lbl_salt_price_bdt')}
              value={priceBdt}
              keyboardType="numeric"
              onChangeText={setPriceBdt}
            />
            <SelectField
              label={t('lbl_salt_tank')}
              value={tank}
              options={[
                { value: 'A', label: 'Tank A' },
                { value: 'B', label: 'Tank B' },
                { value: '0', label: 'Tank 0' }
              ]}
              onChange={setTank}
            />
          </View>
          <Text style={[uiStyles.h3, { marginTop: 10 }]}>{t('lbl_salt_elements_pct')}</Text>
          <View style={uiStyles.grid}>
            {Solver.ELEMENT_ORDER.map(k => (
              <Field
                key={k}
                label={`${k} (%)`}
                value={compMap[k] || ''}
                keyboardType="numeric"
                onChangeText={v => setCompMap(Object.assign({}, compMap, { [k]: v }))}
                style={{ minWidth: 95, maxWidth: 130 }}
              />
            ))}
          </View>
          <View style={[uiStyles.row, { marginTop: 8 }]}>
            <Btn title="Save Custom Fertilizer" onPress={handleSaveCustomSalt} />
            <Btn variant="ghost" title="Cancel" onPress={() => setShowAdd(false)} />
          </View>
        </Card>
      ) : null}

      <Card>
        {filtered.map(s => {
          const comp = Solver.getSubstanceComp(s);
          const compBadges = Solver.ELEMENT_ORDER.filter(k => comp[k] > 0)
            .map(k => `${k}: ${fmt(comp[k], 2)}%`)
            .join(' • ');
          return (
            <View key={s.id} style={localStyles.itemRow}>
              <View style={{ flex: 1 }}>
                <View style={uiStyles.row}>
                  <Text style={localStyles.itemTitle}>{I18N.tObj(s, 'name')}</Text>
                  <Chip label={`Tank ${Solver.getSubstanceTank(s)}`} />
                  {s.custom ? <Chip label="Custom" tone="amber" /> : null}
                </View>
                <Text style={localStyles.itemSub}>
                  {s.formula} • Purity: {fmt(Solver.getPurityFraction(s) * 100, 0)}% • ৳
                  {fmt(Solver.getSubstancePriceBDT(s), 0)}/kg
                </Text>
                <Text style={localStyles.itemComp}>{compBadges}</Text>
              </View>
              {s.custom ? (
                <Btn
                  small
                  variant="danger"
                  title="Delete"
                  onPress={() => {
                    updateAppState({
                      customSalts: (appState.customSalts || []).filter(x => x.id !== s.id),
                      selectedSalts: appState.selectedSalts.filter(id => id !== s.id)
                    });
                  }}
                />
              ) : null}
            </View>
          );
        })}
      </Card>
    </View>
  );
}

const localStyles = StyleSheet.create({
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    paddingVertical: 10
  },
  itemTitle: { fontSize: 14, fontWeight: '700', color: COLORS.g900 },
  itemSub: { fontSize: 12, color: COLORS.muted, marginTop: 2 },
  itemComp: { fontSize: 12, color: COLORS.g700, fontWeight: '600', marginTop: 3 }
});
