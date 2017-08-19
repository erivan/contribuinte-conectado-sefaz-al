import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput} from 'react-native'

class SearchProcessDialog extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            style={{width:30, height:30, alignSelf: 'flex-end'}}
            source={require('../../assets/images/stopwatch.png')}
          />
        </View>

        <Text style={styles.textStyle}>DIGITE O NÚMERO DO PROCESSO</Text>

        <TextInput
          underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.textInputStyle}
          editable={true}
          maxLength={40}
        />

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textButton}>BUSCAR PROCESSO</Text>
          <Image
            style={{ width: 15, height: 15, marginLeft: 10}}
            source={require('../../assets/images/stopwatch.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textButton:{
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
    alignSelf: 'center'
  },
  textStyle: { 
    color: "#0073FF", 
    marginBottom: 20 ,
    fontWeight : '500',
    fontSize: 13,
    marginLeft: 10
  },
  topContainer: {
    alignContent: 'flex-end',   
     marginBottom: 20
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: 25,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#0073FF',
    borderRadius: 10,
    borderColor: "#F0F3F6",
  }, 
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#F0F3F6',
    paddingLeft: 15, 
    marginBottom: 20,
  }

}

export default SearchProcessDialog