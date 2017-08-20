import React,{Component} from 'react';
import {StyleSheet,Text,View,ScrollView} from 'react-native';

class FacAnswer extends Component {
  render () {

    return (
      <View>
        <Text>
        {this.props.navigation.params.question}
        </Text>
      </View>
    )
  };
};

export default FacAnswer;
