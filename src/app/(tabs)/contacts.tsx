import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { CONTACTS } from '@/data/contacts';
import { useTypedRouter } from '@/hooks/use-typed-router';

export default function ContactsScreen() {
  const router = useTypedRouter();

  return (
    <FlatList
      data={CONTACTS}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Pressable
          style={styles.row}
          onPress={() => router.push('contact/[id]', { id: item.id })}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
          </View>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#F0F0F3',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  role: {
    fontSize: 14,
    color: '#60646C',
  },
});
