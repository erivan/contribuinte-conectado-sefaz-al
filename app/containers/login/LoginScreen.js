import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import { connect } from 'react-redux';
import Realm from 'realm';
import * as actions from './LoginActions';
import AuthRepository from './../../domain/local/authenticationdatasource/AuthRepository';
import Schemas from './../../domain/local/schema';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      authorization: null,
      buttonText: 'SOLICITAR AUTORIZAÇÃO',
      hideInputs: false,
      error: '',
      missingFields: false,
      authorized: null,
      loogedIn: false
    };
  }

 componentWillMount() {
   AuthRepository.all().map((user) => (
     this.setState({ loogedIn: true })
   ));
 }
  componentWillReceiveProps(nextProps) {
    if (nextProps.authorized !== this.props.authorized) {
        this.setState({ authorized: nextProps.authorized });
    } else if (this.props.authorization !== nextProps.authorization) {
        this.setState({ buttonText: 'Entrar', hideInputs: true, error: '', authorization: nextProps.authorization })
    } else if (this.props.notAuthorized !== nextProps.notAuthorized) {
        this.setState({ buttonText: 'Entrar', hideInputs: true, error: 'Certifique-se que você autorizou o nosso aplicativo', authorization: this.state.authorization })
    }
  }

  requestAuthorization() {
    if (this.state.login === '') {
      this.setState({ missingFields: true });
      return null;
    }
    const login = this.state.login;
    this.setState({ missingFields: false });
    if (this.state.hideInputs) {
      this.props.authorize({ login, idAutorizacao: this.state.authorization.data.idAutorizacao });
    } else {
      this.props.requestAuthorizationUser(login);
    }
  }


  openLink() {
    Linking.openURL(this.state.authorization.data.urlAutorizacao)
  }

  renderError() {
    if (!this.state.hideInputs) return null;
    const msg = this.state.error !== '' ? this.state.error : 'Você deve autorizar nosso aplicativo no site da sefaz, clique para ser redirecionado' ;
    return <View style={{ justifyContent: 'center', alignItems: 'center', height: 50, margin: 20}}>
            <TouchableOpacity onPress={this.openLink.bind(this)}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>{msg}</Text>
              </TouchableOpacity>
            </View>;
  }
  requiredFields() {
    if (this.state.missingFields) {
      const msg = 'O campo usuário é obrigátorio.' ;
      return <View style={{ justifyContent: 'center', alignItems: 'center', height: 50}}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>{msg}</Text>
              </View>;
    }
  }

  authorizeUser() {
    AuthRepository.create( { login:  this.state.login, token: this.state.authorized.data.id_token } );
    this.goToSelectService();
  }
  goToSelectService() {
    this.props.navigation.navigate('SelectServiceScreen');
  }
  renderInputs() {
    if (this.state.hideInputs) {
      return null;
    }

    return (<View>
        <TextInput
          underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.inputLogin}
          onChangeText={(login) => this.setState({login})}
          placeholder='Usuário'
          value={this.state.login}
        />
    </View>);
  }

  render() {
    if (this.state.loogedIn) {
        this.goToSelectService();
      return null;
    }
    if (this.state.authorized) {
        this.authorizeUser()
        return null;
    }

    return (

      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ marginBottom: 20, marginTop: 1, flex: 1, position: 'relative' }}>
        <Image
            style={{ height: 250, width: null }}
            source={require('./assets/logo.png')}/>
        </View>

        <View style={{ flex: 1, padding: 20 }}>
          {this.renderInputs()}
          <TouchableOpacity style={styles.LoginButton} onPress={this.requestAuthorization.bind(this)}>
            <Text style={styles.buttonText}>{this.state.buttonText}</Text>
          </TouchableOpacity>
          {this.renderError()}
          {this.requiredFields()}
      </View>
    </View>
    );
  }
}

const styles = {
  inputLogin: {
    height: 50,
    borderColor: '#C2CEDC',
    borderWidth: 0.5,
    margin: 5,
    borderRadius: 50,
    paddingLeft: 30
  },
  LoginButton: {
    backgroundColor: '#0073FF',
    height: 52,
    alignItems: 'center',
    justifyContent:'center',
    borderColor: 'gray',
    borderWidth: 0,
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

const mapStateToProps = (state) => ({
    authorization: state.loginScreen.authorization,
    notAuthorized: state.loginScreen.notAuthorized,
    authorized:    state.loginScreen.authorized
})

export default connect(mapStateToProps, actions)(LoginScreen)
