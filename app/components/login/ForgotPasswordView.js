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

import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Zocial'
import Icon2 from 'react-native-vector-icons/Entypo'
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux'

import styles from '../../styles'

class ForgotPasswordView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    repassword: '',
    error: '',
  }


  render() {
    return (
      <View style={[styles.formContainer, {marginTop:25}]}>

        <View style={styles.inputContainer}>
          <Icon style={styles.textIconContainer}  name='email' size={18} color='#FFFFFF' />
          <TextInput
            style={[styles.input, styles.normalText]}
            placeholder="Email address"
            placeholderTextColor='rgba(255, 255, 255, 0.3)'
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
        </View>

        <TouchableHighlight  style={[styles.button, {marginTop: 40}]} onPress={this.props.onSubmitForgotPasswordPress.bind(this)}>
          <Text style={styles.buttonText}>SEND EMAIL</Text>
        </TouchableHighlight>
      </View>
    );
  }

}

export default connect()(ForgotPasswordView)
