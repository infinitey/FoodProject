import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

import { connect } from 'react-redux'
import DatePicker from './DatePicker'

import styles from '../../styles'
import Icon2 from 'react-native-vector-icons/Entypo'


class DeliveryDropDown extends Component {

  render() {


    return (
      <View>
        <DatePicker label={this.props.label}/>

        <View style={[styles.formContainer, {borderBottomWidth: 1, borderBottomColor:'rgb(96, 94, 94)'}]}>
          <Text style={styles.normalText}>Select location</Text>

          <ScrollView style={{paddingTop: 10, paddingLeft:25, paddingBottom: 10}}>
            <View style={{paddingTop: 7, paddingBottom: 7}}>
              <Text style={styles.normalText}>Address line 1</Text>
              <Text style={styles.normalText}>Address line 2</Text>
            </View>

            <View style={{paddingTop: 7, paddingBottom: 7}}>
              <Text style={styles.normalText}>Address line 1</Text>
              <Text style={styles.normalText}>Address line 2</Text>
            </View>

            <View style={{paddingTop: 7, paddingBottom: 7}}>
              <Text style={styles.normalText}>Address line 1</Text>
              <Text style={styles.normalText}>Address line 2</Text>
            </View>
          </ScrollView>

          <View style={[ { flexDirection: 'row-reverse'}]}>

            <View style={{flex: 1,flexDirection:'row-reverse'}}>
              <TouchableOpacity
                style={{alignSelf:'center'}}>
              <Icon2  name='chevron-right' size={20} color='#FFFFFF' />
              </TouchableOpacity>
            </View>

            <Text style={[styles.normalText, { paddingTop:4, flex: 1.5}]}>Add new address</Text>
          </View>



        </View>

      </View>
    );
  }
}


export default connect()(DeliveryDropDown)
