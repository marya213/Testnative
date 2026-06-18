import { Platform, StyleSheet, Text, View } from 'react-native';

type Card = {
  id: string;
  title: string;
  color: string;
};

const CARDS: Card[] = [
  { id: '1', title: 'Visa •••• 4242', color: '#2D6CDF' },
  { id: '2', title: 'Mastercard •••• 8821', color: '#E0524B' },
  { id: '3', title: 'Amex •••• 1003', color: '#1F8A70' },
];

export function CardStack() {
  return (
    <View style={styles.container}>
      {CARDS.map((card, i) => (
        <View
          key={card.id}
          style={[
            styles.card,
            {
              position: 'absolute',
              left: i * 30,
              top: i * 15,
              backgroundColor: card.color,
              zIndex: i,
            },
          ]}>
          <Text style={styles.cardTitle}>{card.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    // 280 (largeur carte) + 2 * 30 (décalage des cartes empilées)
    width: 340,
    alignSelf: 'center',
  },
  card: {
    width: 280,
    height: 170,
    borderRadius: 16,
    padding: 16,
    ...Platform.select({
      web: {
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6,
      },
    }),
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
