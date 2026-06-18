import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HolyGrailLayoutProps = {
  children?: ReactNode;
};

export function HolyGrailLayout({ children }: HolyGrailLayoutProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <View style={[styles.header, { height: 56 + insets.top, paddingTop: insets.top }]}>
        <Text style={styles.headerFooterText}>Header</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.sidebars}>
          <Text style={styles.mainText}>Left Sidebar</Text>
        </View>
        <View style={styles.mainContent}>
          {children ?? (
            <Text style={styles.mainText}>
              Main content (ajouter composants ici)
            </Text>
          )}
        </View>
        <View style={styles.sidebars}>
          <Text style={styles.mainText}>Right Sidebar</Text>
        </View>
      </View>
      <View style={[styles.footer, { height: 48 + insets.bottom, paddingBottom: insets.bottom }]}>
        <Text style={styles.headerFooterText}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  sidebars: {
    width: 60,
    justifyContent: 'center',
    backgroundColor: '#e4e4e4',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#1c2855',
  },
  footer: {
    justifyContent: 'center',
    backgroundColor: '#1c2855',
  },
  headerFooterText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  mainText: {
    color: '#242424',
    textAlign: 'center',
  },
});
