import React, { Component } from 'react'
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
