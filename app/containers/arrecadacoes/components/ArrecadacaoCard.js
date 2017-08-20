import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native'

const ArrecadacaoCard = ({ title }) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{title}</Text>
    </View>
  )
}

const styles = {
  ArrecadacaoCardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderWidth: 1,
    padding: 20,
  },
}

export default ArrecadacaoCard
