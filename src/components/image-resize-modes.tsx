import { Image, ImageResizeMode, StyleSheet, Text, View } from 'react-native';

const MODES: ImageResizeMode[] = ['cover', 'contain', 'stretch', 'center'];

export function ImageResizeModes() {
  return (
    <View>
      {MODES.map((mode) => (
        <View key={mode} style={styles.block}>
          <Text style={styles.label}>{mode}</Text>
          <Image
            source={{ uri: 'https://picsum.photos/400/200' }}
            style={styles.image}
            resizeMode={mode}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  image: {
    width: '100%',
    height: 120,
    backgroundColor: '#EEE',
  },
});
