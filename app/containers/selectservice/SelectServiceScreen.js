
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import  * as actions  from './SelectServiceActions'
import ServiceItem from './components/ServiceItem'
import Modal from 'react-native-modal'
import SearchProcessDialog from '../searchprocess/SearchProcessDialog'

class SelectServiceScreen extends Component {

  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  componentDidMount() {
      this.props.loadServices('company-guid-1')
  }

  state = { open: false };

  goToTerms() {
    this.props.navigation.navigate('TermScreen');
  }
  goToProcess() {
    this.props.navigation.navigate('ShowProcessScreen');
  }
  goToArrecadacoes() {
    this.props.navigation.navigate('ArrecadacoesScreen');
  }
  render() {
    const { services, navigation } = this.props;

    return (
      <View style={styles.servicesContainer}>
        <View style={styles.servicesInfo}>
          <View style={styles.servicesInfoRow}>
            <View style={styles.itemServiceInfoLeft}>
              <Text style={styles.itemServiceInfoTitle}>CACEAL</Text>
            </View>
            <View style={styles.itemServiceInfoRight}>
              <Text style={styles.itemServiceInfoValue, styles.itemServiceInfoCaceal}>24002198</Text>
            </View>
          </View>

          <View style={styles.servicesInfoRow}>
            <View style={styles.itemServiceInfoLeft}>
              <Text style={styles.itemServiceInfoTitle}>Nome Fantasia</Text>
            </View>
            <View style={styles.itemServiceInfoRight}>
              <Text style={styles.itemServiceInfoValue}>Hackathon S/A 24002198</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.servicesMenu}>
          <View style={styles.servicesListRow}>
            <TouchableOpacity style={styles.itemServiceContainer} onPress={this.goToArrecadacoes.bind(this)}>
                <Image
                source={require('../../assets/images/deposit.png')} style={styles.itemServiceItemImage}
                />
                <Text style={styles.itemServiceTitle}>Pendências</Text>
            </TouchableOpacity>
            <View style={styles.itemServiceContainer}>
              <TouchableOpacity onPress={this.goToTerms.bind(this)}>
              <Image
                source={require('../../assets/images/trolley.png')} style={styles.itemServiceItemImage}
              />
              <Text style={styles.itemServiceTitle}>Apreensões</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.itemServiceContainer} onPress={this.goToProcess.bind(this)}>
              <Image
              source={require('../../assets/images/text-file.png')} style={styles.itemServiceItemImage}
              />
              <Text style={styles.itemServiceTitle}>Processos</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.servicesListRow}>
            <View style={styles.itemServiceContainer}>
              <Image
                source={require('../../assets/images/question.png')} style={styles.itemServiceItemImage}
              />
              <Text style={styles.itemServiceTitle}>FAQ</Text>
            </View>
            <View style={styles.itemServiceContainer}>
              <Image
                source={require('../../assets/images/megaphone.png')} style={styles.itemServiceItemImage}
              />
              <Text style={styles.itemServiceTitle}>Denúncia</Text>
            </View>
            <View style={styles.itemServiceContainer}>
              <Image
                source={require('../../assets/images/operator.png')} style={styles.itemServiceItemImage}
              />
              <Text style={styles.itemServiceTitle}>Atendimento</Text>
            </View>
          </View>
        </View>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.searchProcessModal}>
            <SearchProcessDialog

            />
          </View>
        </Modal>

        <View style={styles.servicesFooter}>
          <Image
            source={require('../../assets/images/logo-footer.png')}
          />
        </View>
      </View>
    )
  }
}

const styles = {
    servicesFooter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    servicesContainer: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white'
    },
    itemServiceContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 0.5,
      borderColor: '#f0f3f6',
      padding: 10,
    },
    itemServiceTitle: {
      color: '#0c73f0',
      fontWeight: '500',
      fontSize: 12,
      marginBottom: 5
    },
    itemServiceItemImage: {
      marginTop: 15
    },
    servicesInfo: {
      padding: 10,
      margin: 10,
      marginBottom: 30,
      backgroundColor: '#f0f3f6',
      borderRadius: 3,
    },
    servicesInfoRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemServiceInfoLeft: {
      flex: 1,
      paddingRight: 10,
    },
    itemServiceInfoTitle: {
      color: '#90a5c0',
      fontSize: 12,
      fontWeight: '500',
      textAlign: 'right',
    },
    itemServiceInfoStatus: {
      color: 'white',
      fontSize: 11,
      fontWeight: '500',
      textAlign: 'center',
      background: '#0c73f0'
    },
    itemServiceInfoCaceal: {
      fontSize: 18,
      fontWeight: '700',
    },
    itemServiceInfoRight: {
      flex: 2,
    },
    itemServiceInfoValue: {
      color: '#2c2c2c'
    },
    servicesMenu: {
      flex: 1,
      // flexDirection: 'column',
    },
    servicesListRow: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'stretch'
    },
    searchProcessModal : {
      backgroundColor: 'white',
      borderRadius: 5,
    }
}

const mapStateToProps = (state) => ({
    services: state.selectServiceScreen.services,
})

export default connect(mapStateToProps, actions)(SelectServiceScreen)
