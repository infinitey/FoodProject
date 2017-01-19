import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
} from 'react-native';

import styles from '../../styles'
import colors from '../../colors'

import HomeView from './HomeView'

class Home extends Component {
  submitLoginInfo() {
    this.props.dispatch(pop())
  }

  render() {
    return (
      <View style={styles.container}>
        <HomeView />
      </View>
    );
  }
}


export default connect()(Home)
