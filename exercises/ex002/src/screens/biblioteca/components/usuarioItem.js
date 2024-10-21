import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'

export function UsuarioItem({ nome, cpf, nascimento, id_usuario }) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.bold}>Titulo: </Text>
        {nome}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Autor: </Text>
        {cpf}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Disponivel: </Text>
        {nascimento}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>ID: </Text>
        {id_usuario}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#127799',
    padding: 10,
    margin: 5,
    flex: 1,
    width: '40%',
    height: '22%',
    alignItems: 'flex-start',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.7)',
    borderStyle: 'solid',
  },
  text: {
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
})
