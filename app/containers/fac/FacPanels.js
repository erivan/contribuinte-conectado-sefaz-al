import React,{Component} from 'react';
import SearchBar from 'react-native-elements';
import {StyleSheet,Text,View,ScrollView} from 'react-native';
import FacDetail from './components/FacDetail';

class FacPanels extends Component {
  render() {
    return (
      <View>
        <SearchBar
          icon
          placeholder='Type Here...'/>

        <ScrollView style={styles.container}>
          <Text style={styles.text}>O que é o FPI?</Text>
          <Text style={styles.text}>Em quais  modalidades de transporte deve ser emitido?</Text>
        </ScrollView>
      </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
    alignItems: 'center',
    height: 60,
    padding: 20,
    justifyContent: 'center'
  }
});

export default FacPanels;
