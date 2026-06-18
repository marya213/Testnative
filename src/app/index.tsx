import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GridLayout } from '@/components/GridLayout';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import ProfileCard from '@/components/ProfileCard';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ProfileCard
          name="Big Lol"
          title="Développeur React Mobile"
          imageUri="https://example.com/photo.jpg"
        />
        <ThemedView style={styles.gridContainer}>
          <GridLayout />
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  gridContainer: {
    alignSelf: 'stretch',
  },
});
