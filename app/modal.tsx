import { Text, View } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useArceus } from '../components/ArceusContext';
import arceusThemes from '../constants/arceus.json';

export default function SettingsModal() {
  const { selectedType, setSelectedType } = useArceus();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Arceus Type</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.radioGroup}>
        {arceusThemes.map(theme => (
          <View key={theme.type} style={styles.radioRow}>
            <RadioButton
              value={theme.type}
              status={selectedType === theme.type ? 'checked' : 'unchecked'}
              onPress={() => setSelectedType(theme.type)}
              color="#2596be"
            />
            <Text style={styles.radioLabel}>{theme.type.charAt(0).toUpperCase() + theme.type.slice(1)}</Text>
          </View>
        ))}
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f6fa',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2596be',
    marginBottom: 8,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 18,
    height: 1,
    width: '80%',
    backgroundColor: '#eee',
  },
  radioGroup: {
    width: '100%',
    marginTop: 8,
    marginBottom: 12,
    alignItems: 'flex-start',
    backgroundColor: "transparent",
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: 12,
    backgroundColor: "transparent",
  },
  radioLabel: {
    fontSize: 17,
    marginLeft: 8,
    color: '#333',
    textTransform: 'capitalize',
    fontWeight: '500',
  },
});
