
import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import  * as actions  from './SelectServiceActions'
import ServiceItem from './components/ServiceItem'

class SelectServiceScreen extends Component {
    componentDidMount() {
        this.props.loadServices('company-guid-1')
    }

    render() {
        const { services } = this.props
        console.log(services)
        return (
            <View>
                <Text>TESTE</Text>
                {services.map((item, index) => (
                    <ServiceItem
                        key={index}
                        title={item.name}
                    />
                ))}
            </View>
        )
    }
}

const styles = {
    container: {
        padding: 20,
    },
}

const mapStateToProps = (state) => ({
    services: state.selectServiceScreen.services,
})

export default connect(mapStateToProps, actions)(SelectServiceScreen)
