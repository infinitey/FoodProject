import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  View,
} from 'react-native';

import styles from '../../styles'
import colors from '../../colors'

import { push } from '../../actions/navigation'

import Storage from '../../api/Storage'
import LoginView from './LoginView'

import Api from '../../api/APIClient'


const startAuthentication = () => async(dispatch, getState) => {
  const token = await getToken()
  if (token) {
    //successfully retrieved it
    return (dispatch(authenticationSuccess(token)))
  } else {
    console.log('TOKEN IS NOT FOUND')
  }
}

const submitLogin = (grantType, clientId, clientSecret, code, redirectUri) => async (dispatch, getState) => {
  return (dispatch(loginUser(grantType, clientId, clientSecret, code, redirectUri)))
}

const loginUser = (grantType, clientId, clientSecret, code, redirectUri) => async (dispatch, getState) => {
  //dispatch({type:AUTHENTICATION_PENDING})
  console.log('Login User Entered')
  new APIClient().loginAPICall(grantType, clientId, clientSecret, code, redirectUri)
    .then((result) => {
      console.log(result)
      if(result.success) {
        console.log(result)
        dispatch(authenticationSuccess(result.token))
        dispatch(saveUser(result.user))
      } else {
        console.log(result)
        dispatch(authenticationFailure(result.message))
      }
    })
    .catch((error) => {
      console.log(result)
      dispatch(authenticationFailure(result.message))
    })
}

class Login extends Component {

  showRegisterView() {
    this.props.dispatch(push({ key: 'Register' }))
  }

  showForgotPasswordView() {
    this.props.dispatch(push({ key: 'ForgotPassword', child: 0 }))
  }

  submitLogin(grantType, clientId, clientSecret, code, redirectUri) {
    /*const { dispatch } = this.props
    dispatch(userActionCreators.submitLogin(grantType, clientId, clientSecret, code, redirectUri))

    */

    fetch('https://www.sandbox.arcadier.io/token/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',  //application/x-www-form-urlencoded
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: 'sYwz9ItiZnmzmPrHW2tLkif6EPW1EChkfpnX4B4d',
        client_secret: 'C4TBnu4nLg_G8x26bDYaiJCGCu7P56e1dpV1X5EVvg6l9BioJiw',
        code: 'c8d24de0c930403a801fb869abc6173e',
        redirect_uri: 'perky://main', //redirect to server
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.warn(error);
    })
  }

  render() {
    //console.log("Rovers:" + this.state.rovers)
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

const mapStateToProps = (state) => ({
  isAuthenticating: state.user.isAuthenticating,
  token: state.user.token
})

export default connect(
  mapStateToProps,
)(Login)

/**  <TouchableHighlight
    onPress={this.showRegisterView.bind(this)}>
    <Text>Register</Text>
  </TouchableHighlight>

  <TouchableHighlight
    onPress={this.showHomeView.bind(this)}>
    <Text>Login</Text>
  </TouchableHighlight>

  fetch('https://www.sandbox.arcadier.io/token/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',  //application/x-www-form-urlencoded
    },
    body: JSON.stringify({
      grant_type: 'authorization_code',
      client_id: 'sYwz9ItiZnmzmPrHW2tLkif6EPW1EChkfpnX4B4d',
      client_secret: 'C4TBnu4nLg_G8x26bDYaiJCGCu7P56e1dpV1X5EVvg6l9BioJiw',
      code: 'c8d24de0c930403a801fb869abc6173e',
      redirect_uri: 'perky://', //redirect to server
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
  })
  .catch((error) => {
    console.warn(error);
  })

  /*submitLogin(email, password) {
    //this.props.dispatch(push({ key: 'HomeNavContainer' }))
    console.log('Login button pressed')
    Api.loginAPICall('authorization_code',
      'sYwz9ItiZnmzmPrHW2tLkif6EPW1EChkfpnX4B4d',
      'C4TBnu4nLg_G8x26bDYaiJCGCu7P56e1dpV1X5EVvg6l9BioJiw',
      'c8d24de0c930403a801fb869abc6173e', 'perky://'
    );
  }*/
