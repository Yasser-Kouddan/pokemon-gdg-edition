import { ImageBackground, StyleSheet, View } from 'react-native';
import { ArceusPokedexCard } from '../../components/ArceusPokedexCard';


export default function TabTwoScreen() {
  return (
    <ImageBackground style={styles.container} source={require('../../assets/images/pokelab.jpeg')}>
      <View style={styles.overlayCardContainer}>
        <ArceusPokedexCard />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayCardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
