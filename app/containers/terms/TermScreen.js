/* @flow */

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import CardTerm from './CardTerm';
import * as actions from './TermScreenActions';

 class TermScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: [] }
  }
  goToDetail(name) {
      this.props.navigation.navigate('RetainedMerchandiseScreen', { name });
  }
  componentDidMount() {
      this.props.fetchTermsAction();
  }
  componentWillReceiveProps(nexProps) {
    this.setState({ terms: nexProps.terms[0].data });
  }
 renderCard() {
   return this.state.terms.map((term) => {
     return (<CardTerm
              key={term.numeroTermo}
                term={term} onPress={this.goToDetail.bind(this, term.posto)}
            /> );
   });
 }
  render() {
    return (
      <ScrollView style={styles.container}>
      { this.renderCard() }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9faff' }
});

const mapStateToProps = (state) => ({
    terms: state.termScreen.terms,
})

export default connect(mapStateToProps, actions)(TermScreen)
