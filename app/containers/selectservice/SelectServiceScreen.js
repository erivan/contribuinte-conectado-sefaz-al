
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

  render() {
    const { services, navigation } = this.props;

    return (
      <View style={styles.servicesContainer}>

        <View style={{ width: null, flex: 1, height: 200, margin: 10, backgroundColor: 'grey'}} />
        
        <View style={styles.servicesMenu}>
          <View style={styles.servicesListRow}>
            <View style={styles.itemContainer}>
              <Image
                source={require('../../assets/images/stopwatch.png')}
              />
              <Text>Pendências</Text>
            </View>
            <View style={styles.itemContainer}>
              <Image
                source={require('../../assets/images/megaphone.png')}
              />
              <Text>Apreensões</Text>
            </View>
            <TouchableOpacity style={styles.itemContainer} onPress={navigation.navigate('ShowProcessScreen')}>
                <Image
                  source={require('../../assets/images/text-file.png')}
                />
                <Text>Processos</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.servicesListRow}>
            <View style={styles.itemContainer}>
              <Image
                source={require('../../assets/images/question.png')}
              />
              <Text>FAQ</Text>
            </View>
            <View style={styles.itemContainer}>
              <Image
                source={require('../../assets/images/megaphone.png')}
              />
              <Text>Denúncia</Text>
            </View>
            <View style={styles.itemContainer}>
              <Image
                source={require('../../assets/images/operator.png')}
              />
              <Text>Atendimento</Text>
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
    },
    itemContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: '#F0F3F6',
      padding: 20,
    },
    servicesMenu: {
      flex: 1,
      flexDirection: 'column',
    },
    servicesListRow: {
      flex: 1,
      flexDirection: 'row',
    },
    searchProcessModal : {
      backgroundColor: '#ffffff',
      borderRadius: 5,
    }
}

const mapStateToProps = (state) => ({
    services: state.selectServiceScreen.services,
})

export default connect(mapStateToProps, actions)(SelectServiceScreen)
