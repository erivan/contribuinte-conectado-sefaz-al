import React,{Component} from 'react';
import {StyleSheet,Text,View,ScrollView,TouchableOpacity} from 'react-native';

const questions = [
  {
    "question": "Quanto tempo demora a autorização da NF-e pela SEFAZ-AL?",
    "answer": 'O tempo médio de autorização de cada NF-e tem se mantido inferior a 1 (um) segundo. Cabe ressaltar que, como a NF-e é transmitida em lotes, podendo ser, inclusive, transmitidos vários lotes em simultâneo, o sistema autorizador está estruturado para processar diversas NF-e de forma paralela, de modo que a empresa poderá obter a autorização de várias NF-e dentro do mesmo segundo.'
  },
  {
    "question": "Em que etapas da geração da NF-e é necessária a utilização de certificado digital?",
    "answer": 'O certificado digital no padrão ICP-Brasil será necessário em dois momentos: a) o primeiro é na assinatura digital do documento eletrônico. O certificado digital deverá conter o CNPJ de um dos estabelecimentos da empresa; b) o segundo é na transmissão do documento eletrônico. Qualquer certificado digital no padrão ICP-Brasil que identifique uma empresa credenciada a emitir NF-e na unidade federada onde estiver sendo emitida a nota poderá ser utilizado para transmitir o documento eletrônico para a Secretaria da Fazenda e recuperar a resposta com a autorização de uso, rejeição ou denegação da NF-e, mesmo que não seja de um dos estabelecimentos da empresa emitente. Importante: apenas o certificado digital que efetuou a transmissão do arquivo eletrônico poderá resgatar a resposta de Autorização de uso, rejeição ou denegação.'
  },
  {
    "question": "Como obter o Certificado Digital?",
    "answer": "O certificado digital deve ser do tipo Pessoa Jurídica (conhecido como ePJ ou eCNPJ) do tipo A1 ou A3 e deve ser adquirido através de uma Autoridade Certificadora (AC) credenciada pela Infra-Estrutura de Chaves Públicas Brasileira (ICP-Brasil)."
  },
  {
    "question": "Qual a principal legislação referente à Cadastro Fiscal?",
    "answer": "A principal legislação referente à Cadastro Fiscal é o Anexo IV ao Anexo XV ao RICMS/MS. "
  }
]

class FacPanels extends Component {

  goToAnswer(question) {
    this.props.navigation.navigate('FacAnswer', {name:'nome'});
  };

  renderQuestions() {
    return questions.map((q) => {
      return (
      <TouchableOpacity key={q.question} onPress={this.goToAnswer.bind(this, q)}>
        <View style={styles.row}>
          <View style={{flex: 3}}>
            <Text style={styles.text}>{q.question}</Text>
          </View>
        <View style={{flex: 0.5, alignItems: 'flex-end'}}>
        <Text style={[styles.text, {fontSize: 18, fontWeight: 'bold', color: '#7d7d7d'}]}>></Text>
        </View>
        </View>

      </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.renderQuestions() }
      </ScrollView>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#F5FCFF',
  },
  row: {
    marginTop: 10,
    padding: 20,
    flexDirection: 'row'
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
    fontWeight: 'bold',
    fontSize: 14,
    alignItems: 'center'
  }
});

export default FacPanels;
