import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

import Hr from 'react-native-hr'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Zocial'
import Icon2 from 'react-native-vector-icons/Entypo'
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux'


import styles from '../../styles'
// const mapStateToProps = (state) => ({
//   isAuthenticating: state.user.isAuthenticating,
//   token: state.user.token,
//   error: state.user.error,
// })

class LoginView extends Component {
  state = {
    email: '',
    password: '',
    isAuthenticating: false,
    error: '',
    grant_type: 'authorization_code',
    client_id: 'sYwz9ItiZnmzmPrHW2tLkif6EPW1EChkfpnX4B4d',
    client_secret: 'C4TBnu4nLg_G8x26bDYaiJCGCu7P56e1dpV1X5EVvg6l9BioJiw',
    code: 'c8d24de0c930403a801fb869abc6173e',
    redirect_uri: 'perky://'
  }


  render() {
    return (
      <View style={styles.formContainer}>

        <View style={styles.inputContainer}>
          <Icon style={styles.textIconContainer}  name='email' size={18} color='#FFFFFF' />
          <TextInput
            style={[styles.input, styles.normalText]}
            placeholder="Email address"
            placeholderTextColor='rgba(255, 255, 255, 0.3)'
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon2 style={styles.textIconContainer} name='lock-open' size={18} color='#FFFFFF' />
          <TextInput
            style={[styles.input, styles.normalText]}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor='rgba(255, 255, 255, 0.3)'
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <Icon2 style={styles.textIconContainer}  name='eye' size={15} color='#FFFFFF' />
        </View>

        <TouchableOpacity onPress={this.props.onForgotPasswordPress.bind(this)}>
          <Text style={styles.questionText}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>

        <TouchableHighlight  style={styles.button} onPress={this.props.onPress.bind(this,
          this.state.grantType,
          this.state.clientId,
          this.state.clientSecret,
          this.state.code,
          this.state.redirectUri
        )}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>

        <View style={styles.standardMargin}>
          <Hr lineColor='#ffffff' text='OR' textColor='#ffffff' />
        </View>

        <View style={styles.standardMargin}>
          <Icon.Button name="googleplus" style={styles.googleIconButton}  onPress={this.props.onPress.bind(this, this.state.email, this.state.password)}>
            <Text style={styles.buttonText}>LOGIN WITH GOOGLE+</Text>
          </Icon.Button>
          <Spinner visible={this.state.isAuthenticating} />
        </View>

        <View style={[styles.standardMargin, {flexDirection:'row'}, {alignSelf:'center'}]}>
          <Text style={styles.questionText}>Haven't got account?</Text>
          <TouchableOpacity onPress={this.props.onRegisterPress.bind(this)}>
            <Text style={[styles.questionText, {fontWeight: 'bold',}]}> Register here.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


export default connect()(LoginView)
