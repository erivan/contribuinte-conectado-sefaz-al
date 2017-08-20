import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput} from 'react-native'

const process = {
  "ano": 2011,
  "numeroProtocolo": 11,
  "orgao": 5502,
  "descricaoOrgao": "SECRETARIA EXECUTIVA DE FAZENDA DO ESTADO DE ALAGOAS",
  "numeroInscricao": 24000010,
  "tipoInscricao": "RENAVAM",
  "dadosOrigem": "TESTE",
  "nomeInteressado": "Thiago Queiroz",
  "codigoAssunto": "189",
  "descricaoAssunto": "2ª VIA DA FIC",
  "dataProtocolo": "2011-11-16T20:19:16.000+0000",
  "observacao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex elit, convallis vel dignissim dapibus, rutrum nec elit. Donec sit amet ipsum quis eros volutpat malesuada",
  "ultimaMovimentacao": "2011-11-16T20:19:16.000+0000",
  "dataAcatamento": "2011-11-16T20:19:16.000+0000",
  "setor": "PROTOCOLO CENTRAL",
  "situacao": "Tramitando"
}

class ShowProcessScreen extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.topToolbarTitle}>{process.numeroProtocolo}</Text>
        <Text style={styles.topToolbarSubtitle}>{process.descricaoAssunto}</Text>

        <View style={styles.formDataContent}>
          <View style={styles.formDataTitleContainer}><Text style={styles.formDataTitle}>Inscrição</Text></View>
          <Text style={styles.formStatusText}>{process.numeroInscricao}</Text>
        </View>

        <View style={styles.formDataContent}>
          <View style={styles.formDataTitleContainer}><Text style={styles.formDataTitle}>Tipo</Text></View>
          <Text style={styles.formStatusText}>{process.tipoInscricao}</Text>
        </View>

        <View style={styles.formDataContent}>
          <View style={styles.formDataTitleContainer}><Text style={styles.formDataTitle}>Orgão</Text></View>
          <Text style={styles.formStatusText}>{process.descricaoOrgao}</Text>
        </View>

        <View style={styles.formDataContent}>
          <View style={styles.formDataTitleContainer}><Text style={styles.formDataTitle}>Interessado</Text></View>
          <Text style={styles.formStatusText}>{process.nomeInteressado}</Text>
        </View>

        <View style={{marginBottom: 30}} />

        <View style={styles.processInfoCard}>

          <View style={styles.formDataContent}>
            <View style={styles.formDataTitleContainer}><Text style={styles.formDataTitle}>Setor</Text></View>
            <Text style={styles.formStatusText}>{process.setor}</Text>
          </View>

          <View style={styles.formDataContent}>
            <View style={styles.formDataTitleContainer}><Text style={styles.formDataTitle}>Última Movimentação</Text></View>
            <Text style={styles.formStatusText}>{process.ultimaMovimentacao}</Text>
          </View>

          <View style={styles.formDataContent}>
            <View style={styles.formDataTitleContainer}><Text style={styles.formDataTitle}>Data de Acabamento</Text></View>
            <Text style={styles.formStatusText}>{process.dataAcatamento}</Text>
          </View>

          <View style={styles.formDataContentVertical}>
            <Text style={styles.formDataTitleVertical}>Observação</Text>
            <Text style={styles.formStatusTextVertical}>{process.observacao}</Text>
          </View>

        </View>

      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  topToolbar: {

  },
  topToolbarTitle: {
    color: '#0c73f0',
    fontSize: 30,
    fontWeight: '400',
    alignSelf: 'center'
  },
  topToolbarSubtitle: {
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c2c2c',
    alignSelf: 'center'
  },
  processInfoCard: {
    backgroundColor: '#f0f3f6',
    padding: 20,
  },
  processInfoCardTitle: {

  },
  formDataContent: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
  },
  formDataContentVertical: {
    flexDirection: 'column',
  },
  formDataTitleContainer: {
    flex: 1,
    marginRight: 10,
    alignItems: 'flex-end'
  },
  formDataTitle: {
    color: '#90A5C0',
  },
  formDataTitleVertical: {
    color: '#90A5C0',
    alignSelf: 'center'
  },
  formStatusText: {
    flex: 2,
    color: '#2c2c2c',
  },
  formStatusTextVertical: {
    color: '#2c2c2c',
    justifyContent: 'center',
    margin: 10,
  }
};

export default ShowProcessScreen