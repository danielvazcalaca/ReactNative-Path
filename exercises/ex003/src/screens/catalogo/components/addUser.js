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

export default function AddUser({ modalVisible, closeUserMenu }) {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [id, setId] = useState('')

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/clickSound1.mp3') // Certifique-se de que o caminho está correto
    )
    await sound.playAsync({ rate: 1.5 })
  }

  const handleAddUser = () => {
    if (nome && cpf && nascimento && id) {
      console.log('Usuário adicionado:', { nome, cpf, nascimento, id })
      closeUserMenu()
    } else {
      console.log('Preencha todos os campos')
    }
  }

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeUserMenu}
    >
      <View style={styles.modalContainer}>
        <View style={styles.menu}>
          <Text style={styles.menuTitle}>Adicionar Usuário</Text>
          <View style={styles.buttonContainerFechar}>
            <TouchableOpacity
              style={styles.buttonFechar}
              onPress={closeUserMenu}
            >
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder='Digite o nome'
            value={nome}
            onChangeText={setNome}
            placeholderTextColor='gray'
          />

          <TextInput
            style={styles.input}
            placeholder='Digite o CPF'
            value={cpf}
            onChangeText={setCpf}
            placeholderTextColor='gray'
          />

          <TextInput
            style={styles.input}
            placeholder='Digite a data de nascimento'
            value={nascimento}
            onChangeText={setNascimento}
            placeholderTextColor='gray'
          />

          <TextInput
            style={styles.input}
            placeholder='Digite o ID do usuário'
            value={id}
            onChangeText={setId}
            placeholderTextColor='gray'
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleAddUser()
                playSound()
              }}
            >
              <Text style={styles.buttonText}>ADICIONAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
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
