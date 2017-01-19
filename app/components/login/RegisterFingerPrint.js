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

class RegisterFingerPrint extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    repassword: '',
    error: '',
  }

  onPressConfirmRegister() {
    this.props.dispatch(push({ key: 'RegisterPIN' }))
  }


  render() {
    return (
      <View style = {[styles.container, {flexDirection:'column-reverse'}]}>

        <View style={[styles.formContainer, {flex:4}, {flexDirection:'column-reverse'}]}>
          <TouchableHighlight  style={[styles.button]} onPress={this.onPressConfirmRegister.bind(this)}>
            <Text style={styles.buttonText}>OR SET PIN</Text>
          </TouchableHighlight>
        </View>

        <View style={{flex: 3, flexDirection:'column-reverse'}}>
          <Icon2 style={[styles.bigIconContainer]} name='fingerprint' size={70} color='#FFFFFF' />
          <Text style={styles.contentText}>Complete your registration for future logins and payment authentications</Text>
        </View>

      </View>
    );
  }

}

export default connect()(RegisterFingerPrint)
