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

import { push_home, pop_home } from '../../actions/navigation';

class TakeOutDropDown extends Component {
  onSelectLocation () {
    this.props.dispatch(push_home({ key: 'TakeOut' }))
  }

  render() {

    return (
      <View>
        <DatePicker label={this.props.label}/>

        <View style={[styles.formContainer, { flexDirection: 'row',borderBottomWidth: 1, borderBottomColor:'rgb(96, 94, 94)'}]}>
          <Text style={[styles.normalText, {flex : 1, paddingTop:4, marginLeft: 10}]}>Store</Text>
          <TouchableOpacity style={{flex: 1, flexDirection: 'row-reverse'}}　onPress={this.onSelectLocation.bind(this)}>
            <Icon2 style={styles.dropDownIcon}  name='chevron-right' size={20} color='#FFFFFF' />
            <Text style={[styles.normalText, {paddingTop:4, paddingRight:10}]}>International Plaza</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


export default connect()(TakeOutDropDown)
