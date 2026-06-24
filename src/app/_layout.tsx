import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { useColorScheme, View } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AnimatedSplashOverlay />
        <Slot />
      </ThemeProvider>
    </View>
  );
}
