import React from 'react';
import { Text, View } from 'react-native';

export type StateDisplayProps = {
  label: string;
  value: number;
  color: string;
};

export function StateDisplay({ label, value, color }: StateDisplayProps) {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: color, marginRight: 6 }} />
        <Text style={{ color, fontWeight: 'bold', fontSize: 16 }}>{label}</Text>
      </View>
      <Text style={{ color: '#fff', fontSize: 18 }}>{value}</Text>
    </View>
  );
}
