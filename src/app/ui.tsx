import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardStack } from '@/components/card-stack';
import { GridLayout } from '@/components/GridLayout';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function UIScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <ThemedText type="title" style={styles.title}>
            UI
          </ThemedText>

          <ThemedText type="subtitle">Cartes chevauchées</ThemedText>
          <CardStack />

          <ThemedText type="subtitle">Grille</ThemedText>
          <ThemedView style={styles.block}>
            <GridLayout />
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    alignSelf: 'stretch',
    maxWidth: MaxContentWidth,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    gap: Spacing.three,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
  },
  title: {
    textAlign: 'center',
  },
  block: {
    alignSelf: 'stretch',
  },
});
