import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export function ArceusPokedexCard() {
  return (
    <View style={styles.card}>
        <Image
            source={{ uri: 'https://img.pokemondb.net/sprites/diamond-pearl/normal/arceus-normal.png' }}
            style={styles.image}
            resizeMode="contain"
        />
      <Text style={styles.title}>Arceus</Text>
      <Text style={styles.label}>Type: <Text style={styles.value}>Normal (can change type with Plates)</Text></Text>
      <Text style={styles.label}>Ability: <Text style={styles.value}>Multitype</Text></Text>
      <Text style={styles.label}>Height: <Text style={styles.value}>3.2 m (10′06″)</Text></Text>
      <Text style={styles.label}>Weight: <Text style={styles.value}>320.0 kg (705.5 lbs)</Text></Text>
      <Text style={styles.entry}>
        "It is described in mythology as the Pokémon that shaped the universe with its 1,000 arms."
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(30, 30, 30, 0.7)',
    borderRadius: 16,
    padding: 20,
    margin: 20,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#eee',
    marginTop: 2,
  },
  value: {
    color: '#ffd700',
    fontWeight: '600',
  },
  entry: {
    marginTop: 12,
    fontStyle: 'italic',
    color: '#fff',
    fontSize: 15,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
    alignSelf: 'center',
  },
});
