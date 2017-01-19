import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  TouchableHighlight,
  View,
} from 'react-native';

import styles from '../../styles'
import colors from '../../colors'

import { push } from '../../actions/navigation'
import { pop } from '../../actions/navigation'

import ForgotPasswordView from './ForgotPasswordView'

class ForgotPassword extends Component {
  submitForgotPasswordInfo() {
    //this.props.dispatch(pop())
    this.props.dispatch(push({ key: 'ChangePassword' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <ForgotPasswordView onSubmitForgotPasswordPress={this.submitForgotPasswordInfo.bind(this)}/>
      </View>
    );
  }
}


export default connect()(ForgotPassword)

/**
<TouchableHighlight
  onPress={this.submitLoginInfo.bind(this)}>
  <Text>Submit</Text>
</TouchableHighlight>**/
