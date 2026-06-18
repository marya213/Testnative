import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

export default function Layout() {
  const { width, height } = useWindowDimensions();

  const cardWidth = width * 0.9;
  const numColumns = width > 600 ? 3 : 2;
  const gap = width * 0.03;
  const itemWidth = (cardWidth - gap * (numColumns - 1)) / numColumns;

  const headerHeight = height * 0.08;
  const footerHeight = height * 0.06;
  const paddingHorizontal = width * 0.04;
  const fontSizeTitle = width * 0.048;
  const fontSizeBody = width * 0.042;
  const fontSizeFooter = width * 0.037;

  const cards = Array.from({ length: numColumns * 2 }, (_, index) => index + 1);

  return (
    <SafeAreaView style={styles.appContainer}>
      <View
        style={[
          styles.header,
          { height: headerHeight, paddingHorizontal },
        ]}>
        <Text style={[styles.headerText, { fontSize: fontSizeTitle }]}>
          My App
        </Text>
      </View>

      <View style={[styles.content, { paddingHorizontal }]}>
        <Text
          style={[
            styles.contentText,
            { fontSize: fontSizeBody, marginBottom: gap },
          ]}>
          Contenu Principal
        </Text>

        <View style={[styles.cardGrid, { width: cardWidth, gap }]}>
          {cards.map((cardNumber) => (
            <View
              key={cardNumber}
              style={[
                styles.card,
                { width: itemWidth, height: itemWidth * 0.6 },
              ]}>
              <Text style={{ fontSize: fontSizeBody * 0.9 }}>
                Card {cardNumber}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.footer, { height: footerHeight }]}>
        <Text style={[styles.footerText, { fontSize: fontSizeFooter }]}>
          © 2026 - My App
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1F1F1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    color: '#333',
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
});
