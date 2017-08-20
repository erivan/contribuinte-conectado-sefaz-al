import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ScrollView, TextInput, MapView } from 'react-native'
import ArrecadacaoCard from './components/ArrecadacaoCard'

const arrecadacoes = [
  { 
    "date": "2011-11-16T20:19:16.000+0000", 
    "status": "Pendente" 
  },
  { 
    "date": "2011-11-16T20:19:16.000+0000", 
    "status": "Parado" 
  }, 
  {
    "date": "2011-11-16T20:19:16.000+0000",
    "status": "Pago"
  },
]

class ArrecadacoesScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ padding: 20 }}>

        {arrecadacoes.map((item, index) => (
          <ArrecadacaoCard
            key={index}
            date={item.date}
            status={item.status}
          />
        ))}

        </ScrollView>

      </View>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    justifyContent: 'space-between',   
  },
  statusItem: {
    backgroundColor: '#fb9917',
    paddingLeft: 10,
    paddingRight: 10,
  },
  topLeft: {
    backgroundColor: '#fb9917',
  },
  topRight: {
    alignSelf: 'flex-end'
  },
  arrecadacaoCard: {
    flex: 1,
    flexDirection: 'row'
  }
}

export default ArrecadacoesScreen
