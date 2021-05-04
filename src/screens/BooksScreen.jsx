import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

function BooksScreen() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/Hello.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  function stopSound() {
    const { sound } = Audio.Sound.createAsync(
      require('../../assets/Hello.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    sound.pauseAsync()
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Stop Sound" onPress={stopSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});

// function BooksScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>jopa</Text>
//     </View>
//   );
// }

export default BooksScreen