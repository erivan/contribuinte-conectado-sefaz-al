import React, { Component } from 'react'
import {RkButton} from 'react-native-ui-kitten';

import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'


const ServiceItem = ({ title }) => {
    return (
        <View>
          <Text style={styles.textStyle}>{title}</Text>
          <RkButton>Click me!</RkButton>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textStyle: {
        textAlign: 'center',
    },
    percentText: {
        color: '#ee3923',
        fontSize: 18,
    }
}

export default ServiceItem
