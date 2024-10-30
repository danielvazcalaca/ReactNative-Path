import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'

export function LivroItem({ titulo, autor, disponivel, dono, id }) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.bold}>Titulo: </Text>
        {titulo}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Autor: </Text>
        {autor}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Disponivel: </Text>
        {disponivel}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Dono: </Text>
        {dono}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>ID: </Text>
        {id}
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
    height: '24%',
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
