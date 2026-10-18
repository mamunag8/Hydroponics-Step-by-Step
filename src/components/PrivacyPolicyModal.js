import React from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import { COLORS, Btn, Badge } from './ui';
import I18N from '../engine/i18n';

export default function PrivacyPolicyModal({ visible, onClose }) {
  const isBn = I18N.getLang() === 'bn';

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <View style={styles.header}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>
                {isBn
                  ? '🛡️ ১০০% বিজ্ঞাপনমুক্ত ও গোপনীয়তা নীতি (Privacy Policy)'
                  : '🛡️ 100% Ad-Free & Privacy Policy'}
              </Text>
              <Text style={styles.sub}>
                {isBn
                  ? 'Google Play ও iOS App Store ডেটা সুরক্ষা এবং নীতিমালা বিবৃতি'
                  : 'Google Play & iOS App Store Data Safety & Compliance Disclosure'}
              </Text>
            </View>
            <Btn small variant="secondary" title="✕" onPress={onClose} />
          </View>

          <ScrollView style={{ padding: 16 }}>
            <View style={styles.badgeRow}>
              <Badge text="100% AD-FREE (বিজ্ঞাপনমুক্ত)" tone="green" />
              <Badge text="ZERO DATA COLLECTED" tone="blue" />
              <Badge text="100% OFFLINE CAPABLE" tone="purple" />
              <Badge text="NO AD_ID PERMISSION" tone="amber" />
            </View>

            <View style={styles.section}>
              <Text style={styles.secTitle}>
                1. 100% Ad-Free Commitment (১০০% বিজ্ঞাপনমুক্ত অঙ্গীকার)
              </Text>
              <Text style={styles.secBody}>
                Hydroponics Step by Step contains ZERO third-party advertisements, ZERO banner or interstitial ads, ZERO ad SDKs, and explicitly removes the Android Advertising ID permission (com.google.android.gms.permission.AD_ID). Farmers, students, and researchers can use every tool and course without interruption.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.secTitle}>
                2. Zero Personal Data Collection (কোনো ব্যক্তিগত তথ্য সংগ্রহ করা হয় না)
              </Text>
              <Text style={styles.secBody}>
                We do NOT collect, transmit, rent, or sell any personal data, device identifiers, precise location, contacts, microphone, camera, or analytics. All calculations (Target PPM solver, EC estimation, Water Alkalinity pH adjustment, Custom Salts, Custom Formulations, Course Progress, Language Studio packs, and Farm Batch Logs) are processed and stored 100% locally on your device using on-device storage.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.secTitle}>
                3. Minimal App Permissions (ন্যূনতম পারমিশন)
              </Text>
              <Text style={styles.secBody}>
                Hydroponics Step by Step does not request access to your camera, photos, storage files, contacts, microphone, or location. All calculations and all 3 courses run locally on your phone, tablet, or computer.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.secTitle}>
                4. Scientific & Open-Source Attribution (বৈজ্ঞানিক সূত্র ও ওপেন-সোর্স স্বীকৃতি)
              </Text>
              <Text style={styles.secBody}>
                The mathematical nutrient solver, Limiting Molar Conductivity (LMCv2) EC engine, and core substance/formulation datasets are faithfully adapted from Dr. Daniel Fernandez's open-source HydroBuddy v1.100 (https://github.com/danielfppps/hydrobuddy) under the GNU General Public License v3.0 (GPL-3.0), combined with 3 complete Hydroponics BD courses (50 lessons) and Bangladesh Agricultural Research Institute (BARI) hydroponic crop guides.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.secTitle}>
                5. Agricultural Safe-Handling Notice (কৃষি রাসায়নিক নিরাপত্তা নির্দেশিকা)
              </Text>
              <Text style={styles.secBody}>
                This application is an educational and horticultural calculation utility for preparing hydroponic plant nutrient solutions. When handling concentrated agricultural acids (such as Nitric, Phosphoric, or Sulfuric acid) in real life, always wear protective gloves and eye protection, and always add acid to water—never water to concentrated acid.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.secTitle}>
                6. Developer & Contact Information (যোগাযোগ)
              </Text>
              <Text style={styles.secBody}>
                App Name: Hydroponics Step by Step{'\n'}
                Developer: KasbPRO / Hydroponics BD (hydroponics.com.bd){'\n'}
                Package ID: com.kasb.Hydroponics{'\n'}
                Version: 1.0.0 (Build 1){'\n'}
                Effective Date: October 2026
              </Text>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <Btn title={isBn ? 'বন্ধ করুন' : 'Close'} onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  sheet: {
    width: '100%',
    maxWidth: 720,
    maxHeight: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden'
  },
  header: {
    backgroundColor: COLORS.g900,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800'
  },
  sub: {
    color: '#bbf7d0',
    fontSize: 12,
    marginTop: 2
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 14
  },
  section: {
    marginBottom: 14,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line
  },
  secTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.g900,
    marginBottom: 4
  },
  secBody: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.text
  },
  footer: {
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.line,
    alignItems: 'flex-end'
  }
});
