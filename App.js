import React from 'react'
import { Provider } from 'react-redux'
import { View, Text} from 'react-native'
import store from './app/store'
import SelectServiceScreen from './app/containers/selectservice/SelectServiceScreen'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SelectServiceScreen />
      </Provider>
    )
  }
}
