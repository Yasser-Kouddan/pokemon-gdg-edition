import React from 'react';
import { Image, View } from 'react-native';
import arceusThemes from '../constants/arceus.json';
import { useArceus } from './ArceusContext';

export function PokemonImage() {
  const { selectedType } = useArceus();
  const type = arceusThemes.find(t => t.type === selectedType);
  return (
    <View>
      <Image
        source={{ uri: type ? type.url : arceusThemes[0].url }}
        style={{ width: 250, height: 250 }}
      />
    </View>
  );
}
