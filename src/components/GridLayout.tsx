import { View, Text, StyleSheet } from 'react-native';

// Données
const ITEMS = [
  { id: '1', title: 'Design', color: '#E8871A' },
  { id: '2', title: 'Backend', color: '#2ECFC4' },
  { id: '3', title: 'Mobile', color: '#1B4FBF' },
  { id: '4', title: 'DevOps', color: '#E74C3C' },
  { id: '5', title: 'Data', color: '#8E44AD' },
  { id: '6', title: 'Sécurité', color: '#27AE60' },
];

export function GridLayout() {
  return (
    <View style={styles.grid}>
      {ITEMS.map((item) => (
        <View key={item.id} style={[styles.card, { backgroundColor: item.color }]}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height: 100,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default GridLayout;
