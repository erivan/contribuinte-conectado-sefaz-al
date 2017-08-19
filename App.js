import React from 'react'
import { Provider } from 'react-redux'
import { View, Text} from 'react-native'
import Realm from 'realm';
import store from './app/store'
import SelectServiceScreen from './app/containers/selectservice/SelectServiceScreen'
import LoginScreen from './app/containers/login/LoginScreen'
import Schemas from './app/domain/local/schema'
import AuthRepository from './app/domain/local/authenticationdatasource/AuthRepository';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { realmLoaded: false, loogedIn: false }
  }
  componentWillMount() {
    this.realm = Realm.open({ schema: Schemas })
      .then(() => {
        AuthRepository.all().map((user) => {
          this.setState({ loogedIn: true })
        })
        this.setState({ realmLoaded: true });
    });
  }

  renderScreen() {
    if (this.state.loogedIn) {
    return <SelectServiceScreen />;
    }
    return <LoginScreen />
  }
  render() {
    if (!this.state.realmLoaded) return null;

    return (
      <Provider store={store}>
        {this.renderScreen()}

      </Provider>
    )
  }
}
