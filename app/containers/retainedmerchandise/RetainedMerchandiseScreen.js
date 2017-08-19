import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ScrollView, TextInput, MapView } from 'react-native'

class RetainedMerchandiseScreen extends Component {

  render() {
    return (
      <View>
        <Image
          style={{ width: null, height: 300, }}
          source={require('../../assets/images/maps.jpg')}
        />
        <Text style={styles.placeNameStyle}>NOME DO LOCAL QUE ESTÁ APREENDIDO A MERCADORIA</Text>
        <ScrollView style={styles.container}>
          <View>
            <View style={styles.infoContainer}>
              <Text style={styles.sectionTitle}>DESCRIÇÃO</Text>
              <Text style={styles.innerTextStyle}>ONG sem fins lucrativos voltada à habilitação às pessoas com deficiência auditiva e/ou surdez</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.sectionTitle}>ENDEREÇO</Text>
              <View style={styles.descriptionContainer}>
                <Image
                  style={styles.descriptionIcon}
                  source={require('../../assets/images/stopwatch.png')}
                />
                <Text style={styles.innerTextStyle}>ONG sem fins lucrativos voltada à habilitação às pessoas com deficiência auditiva e/ou surdez</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.sectionTitle}>TELEFONE</Text>
              <View style={styles.descriptionContainer}>
                <Image
                  style={styles.descriptionIcon}
                  source={require('../../assets/images/stopwatch.png')}
                />
                <Text style={styles.innerTextStyle}>ONG sem fins lucrativos voltada à habilitação às pessoas com deficiência auditiva e/ou surdez</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.sectionTitle}>WEBSITE</Text>
              <View style={styles.descriptionContainer}>
                <Image
                  style={styles.descriptionIcon}
                  source={require('../../assets/images/stopwatch.png')}
                />
                <Text style={styles.innerTextStyle}>www.sefaz.com.br</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: 'column',
  },
  descriptionContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  descriptionIcon:{
    width: 20,
    height: 20,
    marginRight: 5
  },
  placeNameStyle: {
    color: '#0073FF',
    fontWeight: 'bold',
    marginLeft: 20
  },
  infoContainer: {
    marginBottom: 20
  },
  sectionTitle: {
    color: '#ccc',
    fontWeight: 'bold',
  }
}

export default RetainedMerchandiseScreen
