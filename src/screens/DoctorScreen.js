import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HYDROGUIDE_DATA from '../data/guide-data';
import I18N from '../engine/i18n';
import {
  COLORS,
  Card,
  SectionTitle,
  Segmented,
  Chip,
  styles as uiStyles
} from '../components/ui';

export default function DoctorScreen() {
  const [partFilter, setPartFilter] = useState('all');
  const t = (k, f) => I18N.t(k, f);
  const lang = I18N.getLang();

  const diagnostics = HYDROGUIDE_DATA.diagnostics.filter(
    d => partFilter === 'all' || d.part === partFilter
  );

  return (
    <View>
      {/* 1. 3-Season Bangladesh Playbook */}
      <Card>
        <SectionTitle>{t('doctor_season_title')}</SectionTitle>
        {HYDROGUIDE_DATA.seasons.map(s => {
          const pts =
            lang === 'bn' && Array.isArray(s.points_bn)
              ? s.points_bn
              : Array.isArray(s.points_en)
              ? s.points_en
              : s.points_bn || [];
          return (
            <View key={s.id} style={localStyles.seasonBox}>
              <View style={[uiStyles.row, { justifyContent: 'space-between', marginBottom: 6 }]}>
                <Text style={uiStyles.h3}>
                  {s.icon} {I18N.tObj(s, 'title')}
                </Text>
                <Chip label={I18N.tObj(s, 'badge')} />
              </View>
              {pts.map((pt, i) => (
                <Text key={i} style={localStyles.bullet}>
                  • {pt}
                </Text>
              ))}
            </View>
          );
        })}
      </Card>

      {/* 2. Interactive Plant Doctor */}
      <Card>
        <SectionTitle>{t('doctor_diag_title')}</SectionTitle>
        <Segmented
          value={partFilter}
          onChange={setPartFilter}
          options={[
            { value: 'all', label: t('loc_all') },
            { value: 'old_leaves', label: t('loc_old_leaves') },
            { value: 'new_leaves', label: t('loc_new_leaves') },
            { value: 'fruit', label: t('loc_fruit') },
            { value: 'roots', label: t('loc_roots') }
          ]}
        />

        <View style={{ marginTop: 12 }}>
          {diagnostics.map(d => (
            <View key={d.id} style={localStyles.diagBox}>
              <View style={[uiStyles.row, { justifyContent: 'space-between', marginBottom: 6 }]}>
                <Text style={[uiStyles.h3, { flex: 1 }]}>{I18N.tObj(d, 'title')}</Text>
                <Chip
                  tone={d.severity === 'high' ? 'red' : 'amber'}
                  label={d.severity.toUpperCase()}
                />
              </View>
              <Text style={localStyles.diagText}>
                <Text style={localStyles.bold}>Cause: </Text>
                {I18N.tObj(d, 'cause')}
              </Text>
              <Text style={[localStyles.diagText, { marginTop: 4 }]}>
                <Text style={[localStyles.bold, { color: COLORS.g800 }]}>Fix: </Text>
                {I18N.tObj(d, 'fix')}
              </Text>
            </View>
          ))}
        </View>
      </Card>
    </View>
  );
}

const localStyles = StyleSheet.create({
  seasonBox: {
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 11,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f9fbf9'
  },
  bullet: {
    fontSize: 13,
    color: COLORS.ink,
    lineHeight: 19,
    marginBottom: 4
  },
  diagBox: {
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 11,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#ffffff'
  },
  diagText: {
    fontSize: 13,
    color: COLORS.ink,
    lineHeight: 19
  },
  bold: {
    fontWeight: '700',
    color: COLORS.danger
  }
});
