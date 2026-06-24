import { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export function ModalComponent() {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => setModalVisible(false);

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.openButton}>
          <Text style={styles.openButtonText}>+</Text>
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.backdrop}>
          <View style={styles.sheet}>
            <Text style={styles.title}>Fenêtre Modale</Text>
            <TextInput placeholder="Nom" style={styles.input} />
            <TextInput placeholder="Prénom" style={styles.input} />

            <TouchableOpacity onPress={closeModal} style={[styles.action, styles.validate]}>
              <Text style={styles.actionText}>Valider</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal} style={[styles.action, styles.cancel]}>
              <Text style={styles.actionText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  openButton: {
    width: 40,
    height: 40,
    backgroundColor: '#99bfdd',
    justifyContent: 'center',
  },
  openButtonText: {
    fontSize: 32,
    textAlign: 'center',
  },
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  action: {
    height: 40,
    justifyContent: 'center',
    marginTop: 8,
  },
  validate: {
    backgroundColor: '#6ea4ea',
  },
  cancel: {
    backgroundColor: '#ea6e6e',
  },
  actionText: {
    fontSize: 22,
    textAlign: 'center',
  },
});
