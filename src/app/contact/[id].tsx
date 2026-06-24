import { useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

import { CONTACTS } from '@/data/contacts';

export default function ContactDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const contact = CONTACTS.find((c) => c.id === id);

  if (!contact) return <Text style={{ padding: 24 }}>Contact introuvable</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: contact.avatar }} style={styles.bigAvatar} />
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.role}>{contact.role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 48,
    paddingHorizontal: 24,
  },
  bigAvatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#60646C',
  },
});
