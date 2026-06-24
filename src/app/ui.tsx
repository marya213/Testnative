import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ImageResizeModes } from '@/components/image-resize-modes';
import { ModalComponent } from '@/components/modal-component';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, Spacing } from '@/constants/theme';

const ACCENT = '#E8871A';

type Item = {
  id: string;
  title: string;
};

const ITEMS: Item[] = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  title: `Élément ${i + 1}`,
}));

export default function UIScreen() {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<Item[]>([]);

  // Chargement initial simulé
  useEffect(() => {
    let active = true;
    const load = async () => {
      await new Promise((r) => setTimeout(r, 1500)); // simuler un appel réseau
      if (active) {
        setData(ITEMS);
        setLoading(false);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await new Promise((r) => setTimeout(r, 1500)); // simuler un appel réseau
    setData(ITEMS);
    setRefreshing(false);
  }, []);

  if (loading) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.center}>
          <ActivityIndicator size="large" color={ACCENT} />
          <ThemedText type="small">Chargement…</ThemedText>
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.flex} edges={['top', 'left', 'right']}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <>
              <ThemedText type="title" style={styles.title}>
                Salut, ça va ?
              </ThemedText>
              <ModalComponent />
              <ImageResizeModes />
            </>
          }
          renderItem={({ item }) => (
            <ThemedView type="backgroundElement" style={styles.row}>
              <ThemedText>{item.title}</ThemedText>
            </ThemedView>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={ACCENT} />
          }
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
  },
  listContent: {
    padding: Spacing.four,
    gap: Spacing.two,
    paddingBottom: BottomTabInset + Spacing.three,
  },
  title: {
    textAlign: 'center',
    marginBottom: Spacing.three,
  },
  row: {
    padding: Spacing.three,
    borderRadius: Spacing.two,
  },
});
