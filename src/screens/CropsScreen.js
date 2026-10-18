import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import HYDROBUDDY_DB from '../data/hydrobuddy-db';
import HYDROGUIDE_DATA from '../data/guide-data';
import I18N from '../engine/i18n';
import {
  COLORS,
  CROP_IMAGES,
  Card,
  SectionTitle,
  Btn,
  Chip,
  styles as uiStyles
} from '../components/ui';

export default function CropsScreen({ updateAppState, onNavigateTab, showToast }) {
  const t = (k, f) => I18N.t(k, f);

  const handleLoadCropFormula = formulaId => {
    const f = HYDROBUDDY_DB.formulations.find(x => x.id === formulaId);
    if (!f) return;
    updateAppState({
      formulaId: f.id,
      targets: Object.assign({}, f.targets),
      result: null
    });
    showToast(I18N.tObj(f, 'name'));
    onNavigateTab('calc');
  };

  return (
    <View>
      <Card>
        <SectionTitle subtitle={t('crops_subtitle')}>{t('crops_title')}</SectionTitle>
      </Card>

      <View style={localStyles.cardsWrap}>
        {HYDROGUIDE_DATA.crops.map(crop => {
          const imgSource = CROP_IMAGES[crop.image] || CROP_IMAGES['assets/images/ui-greenhouse-hero.jpg'];
          return (
            <Card key={crop.id} style={localStyles.cropCard}>
              {imgSource ? (
                <Image source={imgSource} style={localStyles.cropImg} resizeMode="cover" />
              ) : null}
              <Text style={uiStyles.h3}>{I18N.tObj(crop, 'name')}</Text>

              <View style={[uiStyles.row, { marginVertical: 6 }]}>
                <Chip label={`EC ${crop.ecRange}`} />
                <Chip label={`pH ${crop.phRange}`} />
                <Chip tone="amber" label={I18N.tObj(crop, 'daysToHarvest')} />
              </View>

              <Text style={localStyles.kv}>
                <Text style={localStyles.kvBold}>System: </Text>
                {I18N.tObj(crop, 'system')}
              </Text>
              <Text style={localStyles.kv}>
                <Text style={localStyles.kvBold}>Yield: </Text>
                {I18N.tObj(crop, 'yield')}
              </Text>
              <Text style={localStyles.kv}>
                <Text style={localStyles.kvBold}>Season: </Text>
                {I18N.tObj(crop, 'season')}
              </Text>
              <Text style={localStyles.kv}>
                <Text style={localStyles.kvBold}>Varieties: </Text>
                {I18N.tObj(crop, 'varieties')}
              </Text>
              <Text style={localStyles.kv}>
                <Text style={localStyles.kvBold}>Market Price: </Text>
                {I18N.tObj(crop, 'priceBDT')}
              </Text>

              <View style={localStyles.guideBox}>
                <Text style={localStyles.guideTxt}>{I18N.tObj(crop, 'guide')}</Text>
              </View>

              <View style={[uiStyles.row, { marginTop: 10 }]}>
                <Btn
                  small
                  title={t('btn_load_crop_formula')}
                  onPress={() => handleLoadCropFormula(crop.formulaId)}
                />
                {crop.summerFormulaId ? (
                  <Btn
                    small
                    variant="secondary"
                    title="Summer Formula"
                    onPress={() => handleLoadCropFormula(crop.summerFormulaId)}
                  />
                ) : null}
              </View>
            </Card>
          );
        })}
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  cardsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12
  },
  cropCard: {
    flexGrow: 1,
    minWidth: 290,
    maxWidth: 560
  },
  cropImg: {
    width: '100%',
    height: 155,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: COLORS.g100
  },
  kv: {
    fontSize: 13,
    color: COLORS.ink,
    marginBottom: 3,
    lineHeight: 18
  },
  kvBold: {
    fontWeight: '700',
    color: COLORS.g900
  },
  guideBox: {
    marginTop: 6,
    padding: 9,
    borderRadius: 9,
    backgroundColor: '#f5f8f6',
    borderWidth: 1,
    borderColor: COLORS.line
  },
  guideTxt: {
    fontSize: 12.5,
    color: COLORS.ink,
    lineHeight: 18
  }
});
