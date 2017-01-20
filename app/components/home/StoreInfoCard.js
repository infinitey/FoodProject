import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import colors from '../../colors'
import styles from '../../styles'

import MapView from 'react-native-maps';

export default class StoreInfoCard extends Component {

  render() {
    return (
    <View style={styles.storeInfoCard}>
      <TouchableOpacity
        style={{flex:1}}
        onPress={this.props.onSelectStore}>
        <Text style={[styles.normalText, {fontWeight: 'bold', paddingBottom:2}]}>Building name</Text>
        <Text style={[styles.normalText, {paddingBottom:2}]}>Address line 1</Text>
        <Text style={[styles.normalText, {paddingBottom:2}]}>Address line 2</Text>
        <Text style={[styles.normalText, {paddingBottom:2}]}>Phone number</Text>
        <Text style={[styles.normalText, {paddingBottom:2}]}>Opening hours</Text>
      </TouchableOpacity>
    </View>

    );
  }
}


//export default connect()(StoreInfoCard)
