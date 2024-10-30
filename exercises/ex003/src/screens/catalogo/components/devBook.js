import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native'
import { Audio } from 'expo-av'

export default function DevBook({ modalVisible, closeDevMenu }) {
  const [idLivro, setIdLivro] = useState('')

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/clickSound1.mp3') // Certifique-se de que o caminho está correto
    )
    await sound.playAsync({ rate: 1.5 })
  }

  const handleDevBook = () => {
    if (idLivro) {
      console.log('Livro Devolvido:', { idLivro })
      closeDevMenu()
    } else {
      console.log('Preencha todos os campos')
    }
  }

  return (
    <>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeDevMenu}
      >
        <View style={styles.modalContainer}>
          <View style={styles.menu}>
            <Text style={styles.menuTitle}>Devolver Livro</Text>

            <View style={styles.buttonContainerFechar}>
              <TouchableOpacity
                style={styles.buttonFechar}
                onPress={closeDevMenu}
              >
                <Text style={styles.buttonText}>X</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.input}
              placeholder='Digite o ID do livro'
              value={idLivro}
              onChangeText={setIdLivro}
              placeholderTextColor='gray'
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleDevBook()
                  playSound()
                }}
              >
                <Text style={styles.buttonText}>DEVOLVER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  menu: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '110%',
  },
  button: {
    flex: 1,
    backgroundColor: '#00C853',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainerFechar: {
    position: 'absolute',
    width: '24%',
    top: -20,
    right: -30,
  },
  buttonFechar: {
    flex: 1,
    backgroundColor: '#FF1744',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 60,
  },
})
