import { DarkTheme, DefaultTheme, ThemeProvider, Slot } from 'expo-router';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppSafeAreaView from '../components/AppSafeAreaView';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <AppSafeAreaView>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AnimatedSplashOverlay />
        <Slot />
      </ThemeProvider>
    </AppSafeAreaView>
  );
}
