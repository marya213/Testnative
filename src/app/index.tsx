import { Platform, ScrollView, StyleSheet } from 'react-native';

import { CardStack } from '@/components/card-stack';
import { GridLayout } from '@/components/GridLayout';
import { HolyGrailLayout } from '@/components/holy-grail-layout';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, Spacing } from '@/constants/theme';
import ProfileCard from '@/components/ProfileCard';

export default function HomeScreen() {
  return (
    <HolyGrailLayout>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <ProfileCard
          name="Big Lol"
          title="Développeur React Mobile"
          imageUri="https://example.com/photo.jpg"
        />
        <CardStack />
        <ThemedView style={styles.gridContainer}>
          <GridLayout />
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </ScrollView>
    </HolyGrailLayout>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    gap: Spacing.three,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
  },
  gridContainer: {
    alignSelf: 'stretch',
  },
});
