import { useState } from 'react';
import { LayoutChangeEvent, Platform, StyleSheet, Text, View } from 'react-native';

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

// Dimensions de référence d'une carte et décalages de l'empilement.
const BASE_CARD_WIDTH = 280;
const CARD_ASPECT = 170 / 280; // hauteur / largeur
const H_OFFSET_RATIO = 30 / 280; // décalage horizontal par carte
const V_OFFSET_RATIO = 15 / 280; // décalage vertical par carte

export function CardStack() {
  const [available, setAvailable] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    setAvailable(e.nativeEvent.layout.width);
  };

  const lastIndex = CARDS.length - 1;
  // Empreinte totale = largeur carte + décalage horizontal cumulé.
  const footprintRatio = 1 + lastIndex * H_OFFSET_RATIO;

  // Largeur de carte qui tient dans l'espace dispo, sans dépasser la taille de référence.
  const cardWidth = available > 0 ? Math.min(BASE_CARD_WIDTH, available / footprintRatio) : 0;
  const cardHeight = cardWidth * CARD_ASPECT;
  const hOffset = cardWidth * H_OFFSET_RATIO;
  const vOffset = cardWidth * V_OFFSET_RATIO;
  const stackHeight = cardHeight + lastIndex * vOffset;

  return (
    <View style={styles.measure} onLayout={onLayout}>
      <View style={{ height: stackHeight, width: cardWidth + lastIndex * hOffset }}>
        {cardWidth > 0 &&
          CARDS.map((card, i) => (
            <View
              key={card.id}
              style={[
                styles.card,
                {
                  position: 'absolute',
                  width: cardWidth,
                  height: cardHeight,
                  left: i * hOffset,
                  top: i * vOffset,
                  backgroundColor: card.color,
                  zIndex: i,
                },
              ]}>
              <Text style={styles.cardTitle}>{card.title}</Text>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  measure: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  card: {
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
