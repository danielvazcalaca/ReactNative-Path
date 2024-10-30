import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import AddUser from './components/addUser'
import AddBook from './components/addBook'
import EmpBook from './components/empBook'
import DevBook from './components/devBook'

export default function Catalogo() {
  const [userModalVisible, setUserModalVisible] = useState(false)
  const [bookModalVisible, setBookModalVisible] = useState(false)
  const [empModalVisible, setEmpModalVisible] = useState(false)
  const [devModalVisible, setDevModalVisible] = useState(false)

  const openUserMenu = () => {
    setUserModalVisible(true)
  }
  const closeUserMenu = () => {
    setUserModalVisible(false)
  }
  //
  //
  const openBookMenu = () => {
    setBookModalVisible(true)
  }
  const closeBookMenu = () => {
    setBookModalVisible(false)
  }
  //
  //
  const openEmpMenu = () => {
    setEmpModalVisible(true)
  }
  const closeEmpMenu = () => {
    setEmpModalVisible(false)
  }
  //
  //
  const openDevMenu = () => {
    setDevModalVisible(true)
  }
  const closeDevMenu = () => {
    setDevModalVisible(false)
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerMain}>
        <Text style={styles.textMain}>Catálogo de Opções</Text>
      </View>

      {/* Adicionar Livro/Usuário */}
      <View style={styles.partRow}>
        <TouchableOpacity style={styles.partMain} onPress={openUserMenu}>
          <Image
            style={styles.partImage}
            source={require('../../assets/addUser.png')}
          />
          <Text style={styles.partText}>Adicionar Usuário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.partMain} onPress={openBookMenu}>
          <Image
            style={styles.partImage}
            source={require('../../assets/addBook.png')}
          />
          <Text style={styles.partText}>Adicionar Livro</Text>
        </TouchableOpacity>
      </View>

      {/* Emprestar/Devolver o livro */}
      <View style={styles.partRow}>
        <TouchableOpacity style={styles.partMain} onPress={openEmpMenu}>
          <Image
            style={styles.partImage}
            source={require('../../assets/emprestarBook.png')}
          />
          <Text style={styles.partText}>Emprestar Livro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.partMain} onPress={openDevMenu}>
          <Image
            style={styles.partImage}
            source={require('../../assets/devolverBook.png')}
          />
          <Text style={styles.partText}>Devolver Livro</Text>
        </TouchableOpacity>
      </View>

      {/* Modal do Menu */}
      <AddUser
        modalVisible={userModalVisible}
        openUserMenu={openUserMenu}
        closeUserMenu={closeUserMenu}
      />
      <AddBook
        modalVisible={bookModalVisible} // Ajuste aqui
        openBookMenu={openBookMenu}
        closeBookMenu={closeBookMenu}
      />
      <EmpBook
        modalVisible={empModalVisible}
        openEmpMenu={openEmpMenu}
        closeEmpMenu={closeEmpMenu}
      />
      <DevBook
        modalVisible={devModalVisible}
        openDevMenu={openDevMenu}
        closeDevMenu={closeDevMenu}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 60,
    paddingBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#7F04A6',
  },
  textMain: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  partMain: {
    marginTop: 30,
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: 'white',
    width: 180,
    height: 150,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  partImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  partText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  partRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
