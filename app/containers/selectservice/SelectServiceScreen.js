import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import AuthRepository from './../../domain/local/authenticationdatasource/AuthRepository';
import  * as actions  from './SelectServiceActions';
import ServiceItem from './components/ServiceItem';
import Modal from 'react-native-modal';
import SearchProcessDialog from '../searchprocess/SearchProcessDialog';

class SelectServiceScreen extends Component {

  constructor(props) {
    super(props);
    this.logedIn = AuthRepository.logedIn();
    this.state = { isModalVisible: false, open: false, userDetail: null }
  }


  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  componentWillMount() {
    // this.props.loadServices('company-guid-1');
    this.props.getUserInformaion();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.userDetail !== this.props.userDetail) {
      console.log(nextProps.userDetail)
      this.setState({ userDetail: nextProps.userDetail.data })
    }
  }

  goToTerms() {
    this.props.navigation.navigate('TermScreen');
  }
  goToProcess() {
    this.props.navigation.navigate('ShowProcessScreen');
  }
  renderFantasia() {
    if (this.state.userDetail){
      return <Text style={styles.itemServiceInfoValue}>{this.state.userDetail.nomeFantasia}</Text>;
    }


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
              <Text style={styles.itemServiceInfoValue, styles.itemServiceInfoCaceal}>{this.logedIn.login}</Text>
            </View>
          </View>

          <View style={styles.servicesInfoRow}>
            <View style={styles.itemServiceInfoLeft}>
              <Text style={styles.itemServiceInfoValue}>Nome Fantasia</Text>

            </View>
            <View style={styles.itemServiceInfoRight}>
              {this.renderFantasia()}
            </View>
          </View>
        </View>

        <View style={styles.servicesMenu}>
          <View style={styles.servicesListRow}>
            <View style={styles.itemServiceContainer}>
              <Image
              source={require('../../assets/images/deposit.png')} style={styles.itemServiceItemImage}
              />
              <Text style={styles.itemServiceTitle}>Pendências</Text>
            </View>

              <TouchableOpacity style={styles.itemServiceContainer} onPress={this.goToTerms.bind(this)}>
              <Image
                source={require('../../assets/images/trolley.png')} style={styles.itemServiceItemImage}
              />
              <Text style={styles.itemServiceTitle}>Apreensões</Text>
              </TouchableOpacity>

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
    userDetail: state.selectServiceScreen.userDetail
});

export default connect(mapStateToProps, actions)(SelectServiceScreen)
