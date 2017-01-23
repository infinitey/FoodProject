import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
} from 'react-native';

import styles from '../../styles'
import colors from '../../colors'

import HomeView from './HomeView'

import { push_home, pop_home } from '../../actions/navigation';

class Home extends Component {
  submitLoginInfo() {
    this.props.dispatch(pop())
  }

  onSubmitOrderType = () => {
    this.props.dispatch(push_home({ key : 'MenuTabContainer' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <HomeView onSubmitOrderType={this.onSubmitOrderType.bind(this)}/>
      </View>
    );
  }
}


export default connect()(Home)
