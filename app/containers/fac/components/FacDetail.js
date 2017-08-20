import React,{Component} from 'react';
import {Image, Text,View,TouchableOpacity,TextInput} from 'react-native';
import Modal from 'react-native-modal';

class FacDetail extends Component {
  state = {
    modalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true})

  _hideModal = () => this.setState({ isModalVisible: false})

  componentDidMount() {

  }

  state = { open: false };

  render () {

    return (
      <View>
        <Text style={styles.list}>Processos</Text>
      </View>
    )
  };
};

const styles = {
  backgroundColor: '#ffffff',
  borderRadius: 5,
  list : {
    fontWeight: 'bold',
    fontSize: 18,
    alignContent: 'center',
    height: 60,
    padding: 20
  }

};

export default FacDetail
