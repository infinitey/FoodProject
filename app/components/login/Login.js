import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  View,
} from 'react-native';

import styles from '../../styles'
import colors from '../../colors'

import { push } from '../../actions/navigation'

import LoginView from './LoginView'


class Login extends Component {
  showRegisterView() {
    this.props.dispatch(push({ key: 'Register' }))
  }

  showForgotPasswordView() {
    this.props.dispatch(push({ key: 'ForgotPassword', child: 0 }))
  }

  submitLogin(email, password) {
    this.props.dispatch(push({ key: 'HomeNavContainer' }))
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <View style={[styles.container, {flexDirection:'column-reverse'}]}>
        <LoginView
          onPress={this.submitLogin.bind(this)}
          onForgotPasswordPress={this.showForgotPasswordView.bind(this)}
          onRegisterPress={this.showRegisterView.bind(this)}
        />
      </View>
    );
  }
}


export default connect()(Login)

/**  <TouchableHighlight
    onPress={this.showRegisterView.bind(this)}>
    <Text>Register</Text>
  </TouchableHighlight>

  <TouchableHighlight
    onPress={this.showHomeView.bind(this)}>
    <Text>Login</Text>
  </TouchableHighlight>**/
