import react from 'react'
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'

export default function Relatorio() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerMain}>
        <Text style={styles.textMain}>Relatórios</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 60,
    paddingBottom: 15,
    paddingLeft: 10,

    backgroundColor: '#2F8158',
  },
  textMain: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
