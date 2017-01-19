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

import { restart } from '../../actions/navigation'

class RegisterConfirmation extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    repassword: '',
    error: '',
  }

  onPressConfirmRegister() {
    this.props.dispatch(restart({ key: 'Login' }))
  }


  render() {
    return (
      <View style = {[styles.container, {flexDirection:'column-reverse'}]}>

        <View style={[styles.formContainer, {flex:4}, {flexDirection:'column-reverse'}]}>
          <TouchableHighlight  style={[styles.button]} onPress={this.onPressConfirmRegister.bind(this)}>
            <Text style={styles.buttonText}>CONNECT WITH MASTERPASS</Text>
          </TouchableHighlight>
        </View>

        <View style={{flex: 3, flexDirection:'column-reverse'}}>
          <Text style={styles.xBigText}>SUCCESSFUL</Text>
          <Text style={styles.bigText}>REGISTRATION</Text>
        </View>

      </View>
    );
  }

}

export default connect()(RegisterConfirmation)
