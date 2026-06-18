import { SafeAreaView, Text, View } from 'react-native';

export default function LayoutsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* Header */}
      <View style={{ height: 60, backgroundColor: '#184FBF', justifyContent: 'center', paddingHorizontal: 16 }}>
        <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>Mon Application</Text>
      </View>

      {/* Barre de statistiques */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16, backgroundColor: '#F5F5F5' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>42</Text>
          <Text style={{ color: '#999', fontSize: 12 }}>Publications</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>1.2k</Text>
          <Text style={{ color: '#999', fontSize: 12 }}>Abonnés</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>380</Text>
          <Text style={{ color: '#999', fontSize: 12 }}>Abonnements</Text>
        </View>
      </View>

      {/* Contenu */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Zone de contenu principal</Text>
      </View>

      {/* Footer */}
      <View style={{ height: 50, backgroundColor: '#F0F0F0', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Footer</Text>
      </View>

    </SafeAreaView>
  );
}
