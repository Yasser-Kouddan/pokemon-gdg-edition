import * as React from 'react';
import { useState } from 'react';
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { FabActions } from '../../components/FabActions';
import { PokemonImage } from '../../components/PokemonImage';
import { StatusDisplay } from '../../components/StatusDisplay';


export default function PokeBall() {
  const [health, setHealth] = useState(0);
  const [happiness, setHappiness] = useState(0);
  const [stamina, setStamina] = useState(0);
  const [fabOpen, setFabOpen] = useState(false);

  const onFabStateChange = ({ open }: { open: boolean }) => setFabOpen(open);

  return (
    <PaperProvider>
      <ImageBackground style={styles.container} source={require('../../assets/images/background.jpeg')}>
        <View style={styles.overlay}/>
        <StatusBar backgroundColor="#2596be"/>
        {/* Display state values */}
        <StatusDisplay health={health} happiness={happiness} stamina={stamina} />
        <PokemonImage />
        <FabActions
          open={fabOpen}
          onStateChange={onFabStateChange}
          onHeal={() => setHealth(h => Math.min(100, h + 10))}
          onCheerUp={() => setHappiness(h => Math.min(100, h + 10))}
          onTrain={() => setStamina(s => Math.min(100, s + 10))}
          onPress={() => { if (fabOpen) setFabOpen(false); }}
        />
      </ImageBackground>
    </PaperProvider>
  );
}

// ...StateDisplay moved to components/StateDisplay.tsx
// ...FabActions moved to components/FabActions.tsx
// ...PokemonImage moved to components/PokemonImage.tsx

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  // image style moved to PokemonImage component
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.3,
    zIndex: 0
  },
});
