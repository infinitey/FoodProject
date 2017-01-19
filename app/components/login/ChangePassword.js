import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  TouchableHighlight,
  View,
} from 'react-native';

import styles from '../../styles'
import colors from '../../colors'

import { pop } from '../../actions/navigation'
import { restart } from '../../actions/navigation'

import ChangePasswordView from './ChangePasswordView'

class ChangePassword extends Component {
  submitChangePasswordInfo() {
    this.props.dispatch(restart({ key: 'Login' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <ChangePasswordView onChangePasswordPress={this.submitChangePasswordInfo.bind(this)}/>
      </View>
    );
  }
}


export default connect()(ChangePassword)

/**
<TouchableHighlight
  onPress={this.submitLoginInfo.bind(this)}>
  <Text>Submit</Text>
</TouchableHighlight>**/
