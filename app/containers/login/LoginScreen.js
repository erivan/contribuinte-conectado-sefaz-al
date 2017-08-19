/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView
} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { login: '', passowrd: '' }
  }

  render() {
    return (

      <View style={{ flex: 1}}>
        <View style={{ marginBottom: 20, marginTop: 1, flex: 1, position: 'relative'}}>
        <Image
            style={{height: 238, width: null, resizeMode: 'stretch'}}
            source={require('./assets/logo.png')}/>

        </View>

      <View style={{ flex: 1 }}>
          <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.inputLogin}
            onChangeText={(login) => this.setState({login})}
            placeholder='Usuário'
            value={this.state.login}
          />
          <TextInput
            secureTextEntry={true}
            underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.inputLogin}
            onChangeText={(passowrd) => this.setState({passowrd})}
            placeholder='Senha'
            value={this.state.passowrd}
          />
          <View style={styles.LoginButton}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
      </View>
    </View>
    );
  }
}

const styles = {
  inputLogin: {
    height: 50,
    borderColor: '#0073FF',
    borderWidth: 0.5,
    margin: 5,
    borderRadius: 20,
    paddingLeft:30
  },
  LoginButton: {
    backgroundColor: '#0073FF',
    height: 52,
    alignItems: 'center',
    justifyContent:'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    margin: 5,
    padding: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
}
