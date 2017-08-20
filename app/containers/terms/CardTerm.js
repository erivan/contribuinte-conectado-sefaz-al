/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import moment from 'moment'

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'pendente':
      return '#fb9917';
    case 'parado':
      return '#f92828';
    default:
      return '#38cc00';
  }
}
const CardTerm = ({ onPress, term }) => (
<TouchableOpacity onPress={onPress}>


<View style={styles.container}>

<View style={styles.detailStyle}>
<Text style={{ color: '#0c73f0' }}>{term.posto}</Text>
<Text style={{ color: '#90a5c0' }}>Data de apreensão <Text style={{ color: '#7d7d7d' }}>{moment(term.dataEmissao).format('DD/MM/YYYY')}</Text></Text>
</View>
<View style={styles.statusContainer}>
<Text style={[styles.styleStatues, { backgroundColor: getStatusColor(term.status) }]}>{term.status}</Text>
</View>
</View>
</TouchableOpacity>
);

export default CardTerm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
    height: 88
  },
  detailStyle: {
     flex: 2,
     flexDirection: 'column',
     justifyContent: 'space-around'
  },
  statusContainer: {
     flex: 1,
     flexDirection: 'column',
      justifyContent: 'center',
       alignItems: 'flex-end'
     },
  styleStatues: {
    borderRadius: 20,

    color: 'white',
    padding: 5,
     fontWeight: 'bold' }
});
