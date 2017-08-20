import React,{Component} from 'react';
import {StyleSheet,Text,View,ScrollView} from 'react-native';

class FacAnswer extends Component {
  render () {
    console.log(this.props.navigation)
    console.log('carario')
    return (
      <View>
        <Text>
        {this.props.navigation.params.name}
        </Text>
      </View>
    )
  };
};

export default FacAnswer;
