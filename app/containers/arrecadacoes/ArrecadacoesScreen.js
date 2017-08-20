import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ScrollView, TextInput, MapView } from 'react-native'

class ArrecadacoesScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Pendente</Text>
        </View>
        <View>
           <Text>12/07/2033</Text>
        </View>
        <Text>ArrecadacoesScreen</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
}

export default ArrecadacoesScreen
