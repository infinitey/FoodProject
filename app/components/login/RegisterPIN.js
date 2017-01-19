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

import { push } from '../../actions/navigation'

class RegisterPIN extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    repassword: '',
    error: '',
  }

  onPressConfirmRegister() {
    this.props.dispatch(push({ key: 'RegisterConfirmation' }))
  }


  render() {
    return (
      <View style = {styles.container}>

        <View style={styles.formContainer}>
          <Text style={styles.questionText}>Enter 6 digits PIN</Text>
          <View style={styles.inputContainer}>
            <Icon2 style={styles.textIconContainer} name='lock-open' size={18} color='#FFFFFF' />
            <TextInput
              style={[styles.input, styles.normalText]}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
            <Icon2 style={styles.textIconContainer}  name='eye' size={15} color='#FFFFFF' />
          </View>

          <Text style={styles.questionText}>Re-enter 6 digits PIN</Text>
          <View style={styles.inputContainer}>
            <Icon2 style={styles.textIconContainer} name='lock-open' size={18} color='#FFFFFF' />
            <TextInput
              style={[styles.input, styles.normalText]}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
            <Icon2 style={styles.textIconContainer}  name='eye' size={15} color='#FFFFFF' />
          </View>

          <TouchableHighlight  style={styles.button} onPress={this.onPressConfirmRegister.bind(this)}>
            <Text style={styles.buttonText}>SET</Text>
          </TouchableHighlight>

        </View>

      </View>
    );
  }

}

export default connect()(RegisterPIN)
