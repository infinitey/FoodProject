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

class ChangePasswordView extends Component {
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
          <Icon2 style={styles.textIconContainer}  name='user' size={18} color='#FFFFFF' />
          <TextInput
            style={[styles.input, styles.normalText]}
            placeholder="Enter 6 digit PIN"
            placeholderTextColor='rgba(255, 255, 255, 0.3)'
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon2 style={styles.textIconContainer} name='lock-open' size={18} color='#FFFFFF' />
          <TextInput
            style={[styles.input, styles.normalText]}
            secureTextEntry={true}
            placeholder="New password"
            placeholderTextColor='rgba(255, 255, 255, 0.3)'
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <Icon2 style={styles.textIconContainer}  name='eye' size={15} color='#FFFFFF' />
        </View>

        <View style={styles.inputContainer}>
          <Icon2 style={styles.textIconContainer} name='lock-open' size={18} color='#FFFFFF' />
          <TextInput
            style={[styles.input, styles.normalText]}
            secureTextEntry={true}
            placeholder="Re-enter new password"
            placeholderTextColor='rgba(255, 255, 255, 0.3)'
            onChangeText={(repassword) => this.setState({repassword})}
            value={this.state.repassword}
          />
          <Icon2 style={styles.textIconContainer}  name='eye' size={15} color='#FFFFFF' />
        </View>

        <TouchableHighlight  style={[styles.button, {marginTop: 40}]} onPress={this.props.onChangePasswordPress.bind(this)}>
          <Text style={styles.buttonText}>CHANGE PASSWORD</Text>
        </TouchableHighlight>
      </View>
    );
  }

}

export default connect()(ChangePasswordView)
