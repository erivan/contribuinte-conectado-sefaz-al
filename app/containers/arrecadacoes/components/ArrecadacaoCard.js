import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native'
import moment from 'moment'

const ArrecadacaoCard = ({ date, status }) => {
  const statusText = status.toLowerCase();
  return (
    <View style={styles.arrecadacaoCard}>
      <View style={styles.top}>
        <Text style={[styles.dateTextStyle, { color: getStatusColor(status) }]}>{moment(date).calendar()}</Text>
        <Text style={[styles.statusItem, { backgroundColor: getStatusColor(status) }]}>{status}</Text>
      </View>
      <View style={styles.value}>
        <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>DAR</Text>
        <Text style={{ color: '#90A5C0', fontSize: 16, marginBottom: 20}}>R$250,00</Text>
      </View>

      {statusText === 'pendente' &&
        <View style={styles.pendenteStyle}>
          <Text style={{ color: '#90A5C0' }}>Vencimento </Text>
          <Text style={{ fontSize: 20 }}>25/07/2017 </Text>
        </View>
      }
      {statusText === 'parado' &&
        <View style={styles.vencido}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../../assets/images/deposit.png')}
          />
          <Text style={styles.vencidoTitle}>Gerar 2ª Via </Text>
        </View>
      }
      {statusText === 'pago' &&
        <View style={styles.pagoStyle}>
          <Text style={{ color: '#38cc00', fontSize: 14, fontWeight: 'bold' }}>PAGO</Text>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../../assets/images/deposit.png')}
          />
        </View>
      }
    </View>
  )
}

const getStatusColor = (status) => {
  if(!status)
    return '#ccc'

  switch (status.toLowerCase()) {
    case 'pendente':
      return '#fb9917';
    case 'parado':
      return '#f92828';
    case 'pago':
      return '#38cc00';
  }
}

const styles = {
  arrecadacaoCard: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    padding: 7,
    marginBottom: 20,
    borderRadius: 7,
    borderColor: '#90A5C0',
    alignItems: 'center'
  },
  dateTextStyle: {
    marginTop: 3,
    marginRight: 20,
    fontSize: 12,
  },
  statusItem: {
    color: 'white',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 50,
    fontSize: 12,
    alignSelf: 'flex-end'
  },
  top: {
    flexDirection: 'row',
    marginTop: 5
  },
  vencido: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#CCC',
    justifyContent: 'center',
    paddingTop: 7,
    paddingBottom: 7,
  },
  vencidoTitle: {
    color: '#f92828',
  },
  pagoStyle: {
    alignItems: 'center'
  },
  pendenteStyle: {
    alignItems: 'center'
  }

}

export default ArrecadacaoCard
