import React from 'react';
import { View } from 'react-native';
import { StateDisplay } from './StateDisplay';

export type StatusDisplayProps = {
  health: number;
  happiness: number;
  stamina: number;
};

export function StatusDisplay({ health, happiness, stamina }: StatusDisplayProps) {
  return (
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <View style={{ alignItems: 'center', marginHorizontal: 8 }}>
          <StateDisplay label="Health" value={health} color="#e74c3c" />
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 8 }}>
          <StateDisplay label="Happiness" value={happiness} color="#f1c40f" />
        </View>
        <View style={{ alignItems: 'center', marginHorizontal: 8 }}>
          <StateDisplay label="Stamina" value={stamina} color="#27ae60" />
        </View>
      </View>
    </View>
  );
}
