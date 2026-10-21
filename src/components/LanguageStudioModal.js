import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Share,
  StyleSheet
} from 'react-native';
import I18N from '../engine/i18n';
import { COLORS, Btn, Field, SelectField, Chip, styles as uiStyles } from './ui';

export default function LanguageStudioModal({ visible, onClose, onLanguageUpdated }) {
  const [editLang, setEditLang] = useState(I18N.getLang());
  const [filterText, setFilterText] = useState('');
  const [newCode, setNewCode] = useState('');
  const [newName, setNewName] = useState('');
  const [newNative, setNewNative] = useState('');
  const [newDir, setNewDir] = useState('ltr');
  const [importJson, setImportJson] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [, setTick] = useState(0);

  const refresh = () => {
    setTick(n => n + 1);
    if (onLanguageUpdated) onLanguageUpdated();
  };

  const langs = I18N.getAllLanguages();
  const langCodes = Object.keys(langs);
  const activeLang = editLang && langs[editLang] ? editLang : I18N.getLang();
  const pack = I18N.exportLanguagePack(activeLang);
  const dict = (pack && pack.dictionary) || {};
  const baseKeys = I18N.getBaseKeys();
  const q = filterText.trim().toLowerCase();

  const filteredKeys = baseKeys.filter(k => {
    if (!q) return true;
    const enVal = String(I18N.DICTIONARIES.en[k] || '').toLowerCase();
    const curVal = String(dict[k] || '').toLowerCase();
    return k.toLowerCase().includes(q) || enVal.includes(q) || curVal.includes(q);
  });

  const handleCreateLanguage = () => {
    const code = newCode.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
    const name = newName.trim();
    if (!code || !name) return;
    I18N.registerCustomLanguage(
      {
        code,
        name,
        nativeName: newNative.trim() || name,
        dir: newDir,
        flag: '🌐'
      },
      {}
    );
    setEditLang(code);
    I18N.setLang(code);
    setNewCode('');
    setNewName('');
    setNewNative('');
    refresh();
  };

  const handleExportPack = async () => {
    const jsonStr = JSON.stringify(I18N.exportLanguagePack(activeLang), null, 2);
    try {
      await Share.share({
        title: `hydrobuddy-bd-lang-${activeLang}.json`,
        message: jsonStr
      });
    } catch (e) {}
  };

  const handleImportPack = () => {
    try {
      const code = I18N.importLanguagePack(importJson);
      setEditLang(code);
      setImportJson('');
      setShowImport(false);
      refresh();
    } catch (e) {}
  };

  if (!visible) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={uiStyles.modalBackdrop}>
        <View style={[uiStyles.modalSheet, { maxWidth: 720, maxHeight: '92%' }]}>
          <View style={uiStyles.modalHeader}>
            <Text style={uiStyles.h2}>{I18N.t('btn_lang_studio')}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={uiStyles.closeBtn}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator>
            {/* Active Language Selector */}
            <Text style={uiStyles.h3}>Active App Language</Text>
            <View style={[uiStyles.row, { marginBottom: 10 }]}>
              {langCodes.map(code => {
                const l = langs[code];
                const isSelected = code === I18N.getLang();
                return (
                  <Btn
                    key={code}
                    small
                    variant={isSelected ? 'primary' : 'secondary'}
                    title={`${l.flag || '🌐'} ${l.nativeName}${isSelected ? ' ✓' : ''}`}
                    onPress={() => {
                      I18N.setLang(code);
                      setEditLang(code);
                      refresh();
                    }}
                  />
                );
              })}
            </View>

            {/* Digits Toggle */}
            <View style={[uiStyles.row, { marginBottom: 14 }]}>
              <Btn
                small
                variant={I18N.isUsingNativeDigits() ? 'primary' : 'secondary'}
                title={
                  I18N.isUsingNativeDigits()
                    ? 'বাংলা সংখ্যা সক্রিয় (০১২৩৪৫৬৭৮৯) ✓'
                    : 'Western Digits Active (0123456789) ✓'
                }
                onPress={() => {
                  I18N.toggleNativeDigits();
                  refresh();
                }}
              />
            </View>

            {/* Add Any Custom Language */}
            <View style={localStyles.sectionBox}>
              <Text style={uiStyles.h3}>+ Add Any New Language (Universal Language Studio)</Text>
              <View style={uiStyles.grid}>
                <Field
                  label="ISO Code (e.g. ur, ta, id, fr)"
                  value={newCode}
                  onChangeText={setNewCode}
                  placeholder="ur"
                />
                <Field
                  label="Language Name (English)"
                  value={newName}
                  onChangeText={setNewName}
                  placeholder="Urdu"
                />
                <Field
                  label="Native Name"
                  value={newNative}
                  onChangeText={setNewNative}
                  placeholder="اردو"
                />
                <SelectField
                  label="Direction"
                  value={newDir}
                  options={[
                    { value: 'ltr', label: 'Left-to-Right (LTR)' },
                    { value: 'rtl', label: 'Right-to-Left (RTL)' }
                  ]}
                  onChange={setNewDir}
                />
              </View>
              <View style={[uiStyles.row, { marginTop: 6 }]}>
                <Btn small title="Create & Activate Language" onPress={handleCreateLanguage} />
                <Btn
                  small
                  variant="secondary"
                  title="Export JSON Pack"
                  onPress={handleExportPack}
                />
                <Btn
                  small
                  variant="secondary"
                  title={showImport ? 'Hide Import' : 'Import JSON Pack'}
                  onPress={() => setShowImport(!showImport)}
                />
              </View>

              {showImport ? (
                <View style={{ marginTop: 10 }}>
                  <Field
                    label="Paste Language Pack JSON"
                    value={importJson}
                    onChangeText={setImportJson}
                    placeholder='{"schema":"hydrobuddy-bd-langpack-v1","meta":{...},"dictionary":{...}}'
                  />
                  <Btn small title="Import Pack Now" onPress={handleImportPack} />
                </View>
              ) : null}
            </View>

            {/* Live Key Editor */}
            <View style={localStyles.sectionBox}>
              <View style={[uiStyles.row, { justifyContent: 'space-between', marginBottom: 6 }]}>
                <Text style={uiStyles.h3}>Edit Translations ({langs[activeLang]?.name})</Text>
                <Chip label={`${baseKeys.length} keys`} />
              </View>
              <View style={uiStyles.grid}>
                <SelectField
                  label="Language to Edit"
                  value={activeLang}
                  options={langCodes.map(c => ({ value: c, label: langs[c].name }))}
                  onChange={setEditLang}
                />
                <Field
                  label="Search Key or Text"
                  value={filterText}
                  onChangeText={setFilterText}
                  placeholder="calculator, EC, crop..."
                />
              </View>

              {filteredKeys.slice(0, 45).map(k => (
                <View key={k} style={localStyles.keyRow}>
                  <Text style={localStyles.keyCode}>{k}</Text>
                  <Text style={localStyles.keyEn}>{I18N.DICTIONARIES.en[k]}</Text>
                  <Field
                    value={dict[k] || ''}
                    onChangeText={val => {
                      I18N.updateTranslationKey(activeLang, k, val);
                      refresh();
                    }}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const localStyles = StyleSheet.create({
  sectionBox: {
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#f9fbf9'
  },
  keyRow: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    paddingVertical: 6
  },
  keyCode: { fontSize: 11, fontWeight: '700', color: COLORS.g700 },
  keyEn: { fontSize: 12, color: COLORS.muted, marginBottom: 4 }
});
