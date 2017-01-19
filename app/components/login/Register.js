import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  TouchableHighlight,
  View,
} from 'react-native';

import styles from '../../styles'
import colors from '../../colors'

import { push } from '../../actions/navigation'

import RegisterView from './RegisterView'

class Register extends Component {
  submitRegisterInfo() {
    this.props.dispatch(push({ key: 'RegisterFingerPrint' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <RegisterView onSubmitRegisterPress={this.submitRegisterInfo.bind(this)}/>
      </View>
    );
  }
}


export default connect()(Register)

/**
<TouchableHighlight
  onPress={this.submitLoginInfo.bind(this)}>
  <Text>Submit</Text>
</TouchableHighlight>**/
