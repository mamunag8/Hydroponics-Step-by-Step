import React, { useState } from 'react';
import { View, Text, Share, StyleSheet } from 'react-native';
import I18N from '../engine/i18n';
import {
  COLORS,
  Card,
  SectionTitle,
  Btn,
  Field,
  KpiBox,
  styles as uiStyles
} from '../components/ui';

export default function BusinessScreen({ appState, updateAppState, showToast }) {
  const [plants, setPlants] = useState('500');
  const [setupCost, setSetupCost] = useState('250000');
  const [cyclesYr, setCyclesYr] = useState('8');
  const [yieldG, setYieldG] = useState('200');
  const [priceKg, setPriceKg] = useState('150');
  const [monthlyOp, setMonthlyOp] = useState('8000');

  const today = new Date().toISOString().slice(0, 10);
  const [logDate, setLogDate] = useState(today);
  const [logEc, setLogEc] = useState('1.6');
  const [logPh, setLogPh] = useState('5.8');
  const [logTemp, setLogTemp] = useState('26');
  const [logNote, setLogNote] = useState('');

  const t = (k, f) => I18N.t(k, f);
  const fmt = (v, d = 2) => I18N.fmtNum(v, d);

  const nPlants = Math.max(0, Number(plants) || 0);
  const nSetup = Math.max(0, Number(setupCost) || 0);
  const nCycles = Math.max(0, Number(cyclesYr) || 0);
  const nYieldG = Math.max(0, Number(yieldG) || 0);
  const nPrice = Math.max(0, Number(priceKg) || 0);
  const nMonthly = Math.max(0, Number(monthlyOp) || 0);

  const annualYieldKg = (nPlants * nCycles * nYieldG) / 1000.0;
  const annualRevenue = annualYieldKg * nPrice;
  const annualOpCost = nMonthly * 12.0;
  const annualNetProfit = annualRevenue - annualOpCost;
  const paybackMonths = annualNetProfit > 0 ? nSetup / (annualNetProfit / 12.0) : null;
  const roiPct = nSetup > 0 ? (annualNetProfit / nSetup) * 100.0 : 0;

  const logs = appState.logs || [];

  const handleAddLog = () => {
    const entry = {
      id: String(Date.now()),
      date: logDate.trim() || today,
      ec: Number(logEc) || 0,
      ph: Number(logPh) || 0,
      temp: Number(logTemp) || 0,
      note: logNote.trim()
    };
    updateAppState({ logs: [entry, ...logs] });
    setLogNote('');
    showToast('Log entry saved');
  };

  const handleExportLogs = async () => {
    const csvLines = ['date,ec,ph,temp_c,note'].concat(
      logs.map(l => `${l.date},${l.ec},${l.ph},${l.temp},"${(l.note || '').replace(/"/g, '""')}"`)
    );
    try {
      await Share.share({
        title: 'hydrobuddy-bd-logbook.csv',
        message: csvLines.join('\n')
      });
    } catch (e) {}
  };

  return (
    <View>
      {/* 1. Commercial Farm Budget & ROI Calculator */}
      <Card>
        <SectionTitle>{t('biz_roi_title')}</SectionTitle>
        <View style={uiStyles.grid}>
          <Field
            label={t('lbl_farm_plants')}
            value={plants}
            keyboardType="numeric"
            onChangeText={setPlants}
          />
          <Field
            label={t('lbl_farm_setup_cost')}
            value={setupCost}
            keyboardType="numeric"
            onChangeText={setSetupCost}
          />
          <Field
            label={t('lbl_farm_cycles_yr')}
            value={cyclesYr}
            keyboardType="numeric"
            onChangeText={setCyclesYr}
          />
          <Field
            label={t('lbl_farm_yield_plant')}
            value={yieldG}
            keyboardType="numeric"
            onChangeText={setYieldG}
          />
          <Field
            label={t('lbl_farm_price_kg')}
            value={priceKg}
            keyboardType="numeric"
            onChangeText={setPriceKg}
          />
          <Field
            label={t('lbl_farm_monthly_op')}
            value={monthlyOp}
            keyboardType="numeric"
            onChangeText={setMonthlyOp}
          />
        </View>

        <View style={[uiStyles.grid, { marginTop: 10 }]}>
          <KpiBox value={`${fmt(annualYieldKg, 0)} kg`} label="Annual Harvest Yield" />
          <KpiBox value={`৳ ${fmt(annualRevenue, 0)}`} label="Annual Gross Revenue" />
          <KpiBox value={`৳ ${fmt(annualOpCost, 0)}`} label="Annual Operating Cost" />
          <KpiBox value={`৳ ${fmt(annualNetProfit, 0)}`} label="Annual Net Profit" />
          <KpiBox
            value={paybackMonths !== null ? `${fmt(paybackMonths, 1)} mo` : '—'}
            label="Capital Payback Period"
          />
          <KpiBox value={`${fmt(roiPct, 0)}%`} label="Year-1 ROI" />
        </View>
      </Card>

      {/* 2. Daily Reservoir Logbook */}
      <Card>
        <SectionTitle>{t('biz_log_title')}</SectionTitle>
        <View style={uiStyles.grid}>
          <Field label="Date (YYYY-MM-DD)" value={logDate} onChangeText={setLogDate} />
          <Field
            label="EC (mS/cm)"
            value={logEc}
            keyboardType="numeric"
            onChangeText={setLogEc}
          />
          <Field label="pH" value={logPh} keyboardType="numeric" onChangeText={setLogPh} />
          <Field
            label="Water Temp (°C)"
            value={logTemp}
            keyboardType="numeric"
            onChangeText={setLogTemp}
          />
          <Field
            label="Notes / Action Taken"
            value={logNote}
            onChangeText={setLogNote}
            placeholder="Added 2L top-up water..."
          />
        </View>

        <View style={[uiStyles.row, { marginTop: 8 }]}>
          <Btn title={t('btn_add_log_entry')} onPress={handleAddLog} />
          <Btn
            variant="secondary"
            title={t('btn_export_logs_csv')}
            onPress={handleExportLogs}
          />
        </View>

        {logs.length > 0 ? (
          <View style={{ marginTop: 14 }}>
            <View style={uiStyles.tableHeader}>
              <Text style={[uiStyles.th, { flex: 1.3 }]}>Date</Text>
              <Text style={[uiStyles.th, { flex: 0.8, textAlign: 'right' }]}>EC</Text>
              <Text style={[uiStyles.th, { flex: 0.8, textAlign: 'right' }]}>pH</Text>
              <Text style={[uiStyles.th, { flex: 0.8, textAlign: 'right' }]}>°C</Text>
              <Text style={[uiStyles.th, { flex: 2, paddingLeft: 8 }]}>Note</Text>
              <Text style={[uiStyles.th, { width: 40 }]} />
            </View>
            {logs.map(l => {
              const phWarn = l.ph < 5.4 || l.ph > 6.5;
              return (
                <View key={l.id} style={uiStyles.tableRow}>
                  <Text style={[uiStyles.td, { flex: 1.3 }]}>{l.date}</Text>
                  <Text style={[uiStyles.td, { flex: 0.8, textAlign: 'right' }]}>
                    {fmt(l.ec, 2)}
                  </Text>
                  <Text
                    style={[
                      uiStyles.td,
                      {
                        flex: 0.8,
                        textAlign: 'right',
                        fontWeight: '700',
                        color: phWarn ? COLORS.danger : COLORS.g800
                      }
                    ]}
                  >
                    {fmt(l.ph, 1)}
                  </Text>
                  <Text style={[uiStyles.td, { flex: 0.8, textAlign: 'right' }]}>
                    {fmt(l.temp, 1)}
                  </Text>
                  <Text style={[uiStyles.td, { flex: 2, paddingLeft: 8 }]}>{l.note}</Text>
                  <Btn
                    small
                    variant="danger"
                    title="✕"
                    onPress={() =>
                      updateAppState({ logs: logs.filter(item => item.id !== l.id) })
                    }
                  />
                </View>
              );
            })}
          </View>
        ) : (
          <Text style={[uiStyles.sub, { marginTop: 12 }]}>No reservoir log entries yet.</Text>
        )}
      </Card>
    </View>
  );
}
