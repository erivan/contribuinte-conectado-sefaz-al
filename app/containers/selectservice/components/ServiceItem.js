import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
} from 'react-native'

const ServiceItem = ({ title, image }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={image}
        />
        <Text>{title}</Text>
      </View>
    )
}

const styles = {
    serviceItemContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      borderWidth: 1,
      padding: 20,
    },
}

export default ServiceItem
