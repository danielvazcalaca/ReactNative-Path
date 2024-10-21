import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Catalogo() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerMain}>
        <Text style={styles.textMain}>Catálogo de Opções</Text>
      </View>

      {/*  */}
      {/*  */}
      {/* Adicionar Livro/Usuario */}

      <View style={styles.partRow}>
        <View style={styles.partMain}>
          <Image
            style={styles.partImage}
            source={require('../../assets/addUser.png')}
          />
          <Text style={styles.partText}>Adicionar Usuario</Text>
        </View>

        <View style={styles.partMain}>
          <Image
            style={styles.partImage}
            source={require('../../assets/addBook.png')}
          />
          <Text style={styles.partText}>Adicionar Livro</Text>
        </View>
      </View>

      {/*  */}
      {/*  */}
      {/* Emprestar/Devolver o livro */}

      <View style={styles.partRow}>
        <View style={styles.partMain}>
          <Image
            style={styles.partImage}
            source={require('../../assets/emprestarBook.png')}
          />
          <Text style={styles.partText}>Emprestar Livro</Text>
        </View>

        <View style={styles.partMain}>
          <Image
            style={styles.partImage}
            source={require('../../assets/devolverBook.png')}
          />
          <Text style={styles.partText}>Devolver Livro</Text>
        </View>
      </View>
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
