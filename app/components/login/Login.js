import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  View,
} from 'react-native';

import styles from '../../styles'
import colors from '../../colors'

import { push } from '../../actions/navigation'

import LoginView from './LoginView'

import Api from '../../api/APIClient'
//import api from '../../api/api'

const startAuthentication = () => async(dispatch, getState) => {
  const token = await getToken()
  if (token) {
    //successfully retrieved it
    return (dispatch(authenticationSuccess(tokent)))
  } else {
    console.log('TOKEN IS NOT FOUND')
  }
}

const submitLogin = () => async (dispatch, getState) => {
  return (dispatch(loginUser(email, password)))
}

const loginUser = () => async (dispatch, getState) => {
  //dispatch({type:AUTHENTICATION_PENDING})
  console.log('Login User Entered')
  new APIClient().loginAPICall()
    .then((result) => {
      console.log(result)
      if(result.success) {
        console.log(result)
        //dispatch(authenticationSuccess(result.token))
        //dispatch(saveUser(result.user))
      } else {
        console.log(result)
        //dispatch(authenticationFailure(result.message))
      }
    })
    .catch((error) => {
      console.log(result)
      //dispatch(authenticationFailure(result.message))
    })
}

class Login extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      rovers: []
    }
  }

  componentWillMount () {
    api.getRovers().then((res) => {
      this.setState({
        rovers: res.date
      })
    })
  }*/

  showRegisterView() {
    this.props.dispatch(push({ key: 'Register' }))
  }

  showForgotPasswordView() {
    this.props.dispatch(push({ key: 'ForgotPassword', child: 0 }))
  }

  submitLogin(email, password) {
    //this.props.dispatch(push({ key: 'HomeNavContainer' }))
    console.log('Login button pressed')
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
        //redirect_uri: 'http://localhost:8080/apitoken',
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


export default connect()(Login)

/**  <TouchableHighlight
    onPress={this.showRegisterView.bind(this)}>
    <Text>Register</Text>
  </TouchableHighlight>

  <TouchableHighlight
    onPress={this.showHomeView.bind(this)}>
    <Text>Login</Text>
  </TouchableHighlight>**/
