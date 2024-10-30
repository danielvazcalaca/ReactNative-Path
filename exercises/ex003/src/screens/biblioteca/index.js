import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LivroItem } from './components/livroItem'
import { UsuarioItem } from './components/usuarioItem'

const livrosList = [
  {
    titulo: '1984',
    autor: 'George Orwell',
    disponivel: 'Falso',
    dono: 'João',
    id: '1',
  },
  {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    disponivel: 'Verdadeiro',
    dono: 'Maria',
    id: '2',
  },
  {
    titulo: 'Dom Quixote',
    autor: 'Miguel de Cervantes',
    disponivel: 'Falso',
    dono: 'Carlos',
    id: '3',
  },
  {
    titulo: 'A Revolução dos Bichos',
    autor: 'George Orwell',
    disponivel: 'Verdadeiro',
    dono: 'Ana',
    id: '4',
  },
  {
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    disponivel: 'Verdadeiro',
    dono: 'Pedro',
    id: '5',
  },
  {
    titulo: 'Cem Anos de Solidão',
    autor: 'Gabriel García Márquez',
    disponivel: 'Falso',
    dono: 'Fernanda',
    id: '6',
  },
  {
    titulo: 'A Menina que Roubava Livros',
    autor: 'Markus Zusak',
    disponivel: 'Verdadeiro',
    dono: 'Lucas',
    id: '7',
  },
]

const usuariosList = [
  {
    nome: 'Ana Silva',
    cpf: '123.456.789-00',
    nascimento: '15/01/1990',
    id_usuario: '001',
  },
  {
    nome: 'Bruno Almeida',
    cpf: '987.654.321-00',
    nascimento: '23/05/1985',
    id_usuario: '002',
  },
  {
    nome: 'Carla Souza',
    cpf: '456.789.123-00',
    nascimento: '12/08/1992',
    id_usuario: '003',
  },
  {
    nome: 'Diego Pereira',
    cpf: '321.654.987-00',
    nascimento: '04/11/1980',
    id_usuario: '004',
  },
  {
    nome: 'Eliane Costa',
    cpf: '789.123.456-00',
    nascimento: '28/02/1975',
    id_usuario: '005',
  },
  {
    nome: 'Fabio Oliveira',
    cpf: '654.987.321-00',
    nascimento: '10/06/1988',
    id_usuario: '006',
  },
  {
    nome: 'Gabriela Mendes',
    cpf: '159.753.486-00',
    nascimento: '07/09/1995',
    id_usuario: '007',
  },
  {
    nome: 'Henrique Lima',
    cpf: '951.357.258-00',
    nascimento: '17/04/1982',
    id_usuario: '008',
  },
  {
    nome: 'Isabel Rocha',
    cpf: '753.159.846-00',
    nascimento: '25/12/1999',
    id_usuario: '009',
  },
  {
    nome: 'João Gonçalves',
    cpf: '258.456.789-00',
    nascimento: '30/03/1993',
    id_usuario: '010',
  },
]

export default function EstanteLivros() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerMain}>
        <Text style={styles.textMain}>Estante de Livros</Text>
      </View>
      <FlatList
        style={styles.listaFlat}
        data={livrosList}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <LivroItem
            titulo={item.titulo}
            autor={item.autor}
            disponivel={item.disponivel}
            dono={item.dono}
            id={item.id}
          />
        )}
      />
      <View style={styles.containerMain2}>
        <Text style={styles.textMain}>Estante de Usuarios</Text>
      </View>
      <FlatList
        style={{ paddingTop: 14, margin: 0, alignContent: 'flex-start' }}
        data={usuariosList}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <UsuarioItem
            nome={item.nome}
            cpf={item.cpf}
            nascimento={item.nascimento}
            id_usuario={item.id_usuario}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 60,
    paddingBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#127780',
  },

  containerMain2: {
    paddingTop: 40,
    paddingBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#127780',
    marginTop: -340,
    marginBottom: 0,
  },

  textMain: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listaFlat: {
    paddingTop: 14,
    margin: 0,
  },
})
