import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  Platform
} from 'react-native';

export const COLORS = {
  g900: '#14532d',
  g800: '#166534',
  g700: '#15803d',
  g600: '#16a34a',
  g100: '#dcfce7',
  g50: '#f0fdf4',
  ink: '#1f2937',
  muted: '#6b7280',
  line: '#e5e7eb',
  bg: '#f3f6f4',
  card: '#ffffff',
  warn: '#b45309',
  warnBg: '#fef3c7',
  danger: '#b91c1c',
  dangerBg: '#fee2e2',
  info: '#075985',
  infoBg: '#e0f2fe'
};

// Bundled local crop images for native iOS, Android, and Web
export const CROP_IMAGES = {
  'assets/images/crop-lettuce.jpg': require('../../assets/images/crop-lettuce.jpg'),
  'assets/images/crop-tomato.jpg': require('../../assets/images/crop-tomato.jpg'),
  'assets/images/crop-capsicum.jpg': require('../../assets/images/crop-capsicum.jpg'),
  'assets/images/crop-cucumber.jpg': require('../../assets/images/crop-cucumber.jpg'),
  'assets/images/crop-strawberry.jpg': require('../../assets/images/crop-strawberry.jpg'),
  'assets/images/crop-herbs.jpg': require('../../assets/images/crop-herbs.jpg'),
  'assets/images/HYD-KIT-DB10.jpg': require('../../assets/images/HYD-KIT-DB10.jpg'),
  'assets/images/HYD-KIT-DWC12.jpg': require('../../assets/images/HYD-KIT-DWC12.jpg'),
  'assets/images/HYD-KIT-POLY500.jpg': require('../../assets/images/HYD-KIT-POLY500.jpg'),
  'assets/images/BK-MCG-01.jpg': require('../../assets/images/BK-MCG-01.jpg'),
  'assets/images/MCG-KIT-01.jpg': require('../../assets/images/MCG-KIT-01.jpg'),
  'assets/images/ui-greenhouse-hero.jpg': require('../../assets/images/ui-greenhouse-hero.jpg')
};

export function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function SectionTitle({ children, subtitle }) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.h2}>{children}</Text>
      {subtitle ? <Text style={styles.sub}>{subtitle}</Text> : null}
    </View>
  );
}

export function Btn({ title, onPress, variant = 'primary', small = false, style }) {
  const bgStyle =
    variant === 'primary'
      ? styles.btnPrimary
      : variant === 'secondary'
      ? styles.btnSecondary
      : variant === 'danger'
      ? styles.btnDanger
      : styles.btnGhost;
  const txtStyle =
    variant === 'primary'
      ? styles.btnTxtPrimary
      : variant === 'secondary'
      ? styles.btnTxtSecondary
      : variant === 'danger'
      ? styles.btnTxtDanger
      : styles.btnTxtGhost;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onPress}
      style={[styles.btn, bgStyle, small && styles.btnSm, style]}
    >
      <Text style={[styles.btnTxt, txtStyle, small && styles.btnTxtSm]}>{title}</Text>
    </TouchableOpacity>
  );
}

export function Segmented({ options, value, onChange }) {
  return (
    <View style={styles.segWrap}>
      {options.map(opt => {
        const active = opt.value === value;
        return (
          <TouchableOpacity
            key={opt.value}
            onPress={() => onChange(opt.value)}
            style={[styles.segBtn, active && styles.segBtnActive]}
          >
            <Text style={[styles.segTxt, active && styles.segTxtActive]}>{opt.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export function Field({ label, value, onChangeText, keyboardType = 'default', placeholder, style }) {
  return (
    <View style={[styles.fieldWrap, style]}>
      {label ? <Text style={styles.fieldLabel}>{label}</Text> : null}
      <TextInput
        style={styles.input}
        value={String(value === undefined || value === null ? '' : value)}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
      />
    </View>
  );
}

/**
 * Native cross-platform Picker (opens a clean modal sheet on iOS/Android/Web)
 */
export function SelectField({ label, value, options, onChange, style }) {
  const [open, setOpen] = useState(false);
  const current = options.find(o => o.value === value) || options[0] || { label: String(value || '') };

  return (
    <View style={[styles.fieldWrap, style]}>
      {label ? <Text style={styles.fieldLabel}>{label}</Text> : null}
      <TouchableOpacity style={styles.selectBox} onPress={() => setOpen(true)}>
        <Text style={styles.selectTxt} numberOfLines={1}>
          {current ? current.label : ''}
        </Text>
        <Text style={styles.selectArrow}>▾</Text>
      </TouchableOpacity>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <TouchableOpacity
          style={styles.modalBackdrop}
          activeOpacity={1}
          onPress={() => setOpen(false)}
        >
          <View style={styles.modalSheet}>
            <View style={styles.modalHeader}>
              <Text style={styles.h3}>{label || 'Select'}</Text>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <Text style={styles.closeBtn}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{ maxHeight: 420 }}>
              {options.map(opt => {
                const selected = opt.value === value;
                return (
                  <TouchableOpacity
                    key={String(opt.value)}
                    style={[styles.optionRow, selected && styles.optionRowSelected]}
                    onPress={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                  >
                    {opt.group ? <Text style={styles.optionGroupTag}>{opt.group}</Text> : null}
                    <Text style={[styles.optionTxt, selected && styles.optionTxtSelected]}>
                      {opt.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export function KpiBox({ value, label, style }) {
  return (
    <View style={[styles.kpiBox, style]}>
      <Text style={styles.kpiVal}>{value}</Text>
      <Text style={styles.kpiLbl}>{label}</Text>
    </View>
  );
}

export function AlertBox({ type = 'info', children }) {
  const boxStyle =
    type === 'danger'
      ? styles.alertDanger
      : type === 'warning'
      ? styles.alertWarn
      : type === 'success'
      ? styles.alertSuccess
      : styles.alertInfo;
  const txtStyle =
    type === 'danger'
      ? { color: COLORS.danger }
      : type === 'warning'
      ? { color: COLORS.warn }
      : type === 'success'
      ? { color: COLORS.g900 }
      : { color: COLORS.info };
  return (
    <View style={[styles.alert, boxStyle]}>
      <Text style={[styles.alertTxt, txtStyle]}>{children}</Text>
    </View>
  );
}

export function Chip({ label, text, tone = 'green' }) {
  const bg =
    tone === 'red'
      ? COLORS.dangerBg
      : tone === 'amber'
      ? COLORS.warnBg
      : tone === 'blue'
      ? COLORS.infoBg
      : COLORS.g100;
  const fg =
    tone === 'red'
      ? COLORS.danger
      : tone === 'amber'
      ? COLORS.warn
      : tone === 'blue'
      ? COLORS.info
      : COLORS.g900;
  return (
    <View style={[styles.chip, { backgroundColor: bg }]}>
      <Text style={[styles.chipTxt, { color: fg }]}>{label || text}</Text>
    </View>
  );
}

export function Badge({ text, label, tone = 'green' }) {
  return <Chip label={text || label} tone={tone} />;
}

export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.line,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 3
      },
      android: { elevation: 2 },
      default: {}
    })
  },
  h2: { fontSize: 18, fontWeight: '700', color: COLORS.g900, marginBottom: 4 },
  h3: { fontSize: 16, fontWeight: '700', color: COLORS.g800, marginBottom: 4 },
  sub: { fontSize: 13, color: COLORS.muted, lineHeight: 18 },
  row: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnSm: { paddingVertical: 6, paddingHorizontal: 11, borderRadius: 8 },
  btnPrimary: { backgroundColor: COLORS.g600 },
  btnSecondary: { backgroundColor: COLORS.g100, borderWidth: 1, borderColor: '#bbf7d0' },
  btnDanger: { backgroundColor: COLORS.dangerBg, borderWidth: 1, borderColor: '#fecaca' },
  btnGhost: { backgroundColor: '#eef2ef' },
  btnTxt: { fontSize: 14, fontWeight: '700' },
  btnTxtSm: { fontSize: 12 },
  btnTxtPrimary: { color: '#ffffff' },
  btnTxtSecondary: { color: COLORS.g900 },
  btnTxtDanger: { color: COLORS.danger },
  btnTxtGhost: { color: COLORS.ink },
  segWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eef2ef',
    borderRadius: 11,
    padding: 3,
    gap: 4
  },
  segBtn: { paddingVertical: 7, paddingHorizontal: 12, borderRadius: 9 },
  segBtnActive: { backgroundColor: '#ffffff' },
  segTxt: { fontSize: 13, fontWeight: '600', color: COLORS.muted },
  segTxtActive: { color: COLORS.g800, fontWeight: '700' },
  fieldWrap: { minWidth: 140, flexGrow: 1, marginBottom: 6 },
  fieldLabel: { fontSize: 12, fontWeight: '600', color: COLORS.muted, marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5d0',
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    color: COLORS.ink,
    backgroundColor: '#ffffff'
  },
  selectBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#cbd5d0',
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 9,
    backgroundColor: '#ffffff'
  },
  selectTxt: { fontSize: 14, color: COLORS.ink, flex: 1 },
  selectArrow: { fontSize: 14, color: COLORS.muted, marginLeft: 6 },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  modalSheet: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    maxHeight: '85%'
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line
  },
  closeBtn: { fontSize: 18, fontWeight: '700', color: COLORS.muted, padding: 4 },
  optionRow: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    borderRadius: 8
  },
  optionRowSelected: { backgroundColor: COLORS.g100 },
  optionGroupTag: { fontSize: 10, fontWeight: '700', color: COLORS.g700, marginBottom: 2 },
  optionTxt: { fontSize: 14, color: COLORS.ink },
  optionTxtSelected: { fontWeight: '700', color: COLORS.g900 },
  kpiBox: {
    flexGrow: 1,
    minWidth: 145,
    backgroundColor: COLORS.g50,
    borderWidth: 1,
    borderColor: '#bbf7d0',
    borderRadius: 12,
    padding: 10
  },
  kpiVal: { fontSize: 19, fontWeight: '800', color: COLORS.g900 },
  kpiLbl: { fontSize: 12, color: COLORS.muted, marginTop: 2 },
  alert: { padding: 10, borderRadius: 10, marginVertical: 5 },
  alertDanger: { backgroundColor: COLORS.dangerBg },
  alertWarn: { backgroundColor: COLORS.warnBg },
  alertSuccess: { backgroundColor: COLORS.g100 },
  alertInfo: { backgroundColor: COLORS.infoBg },
  alertTxt: { fontSize: 13, lineHeight: 18, fontWeight: '600' },
  chip: { paddingHorizontal: 9, paddingVertical: 3, borderRadius: 99, alignSelf: 'flex-start' },
  chipTxt: { fontSize: 11, fontWeight: '700' },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f5f8f6',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    paddingVertical: 7,
    paddingHorizontal: 6
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    paddingVertical: 7,
    paddingHorizontal: 6
  },
  th: { fontSize: 11, fontWeight: '700', color: COLORS.muted },
  td: { fontSize: 13, color: COLORS.ink }
});
