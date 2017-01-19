import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  DatePickerIOS,
} from 'react-native'

import Hr from 'react-native-hr'
import Icon2 from 'react-native-vector-icons/Entypo'

import { connect } from 'react-redux'

import styles from '../../styles'
// const mapStateToProps = (state) => ({
//   isAuthenticating: state.user.isAuthenticating,
//   token: state.user.token,
//   error: state.user.error,
// })

class DatePicker extends Component {
  constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            showDatePicker: false
        }
    }

  onPressSignUp() {

  }

  _getCurrentDate () {
    var d = this.state.date;
    var datestring = d.toDateString().slice(4) + ' ' + d.toTimeString().substr(0, 5);
    datestring = datestring.substr(0,6) +','+ datestring.substr(6);
    return datestring;
  }

  onDateChange = (date) => {
    this.setState({date: date});
  };

  render() {
    var showDatePicker = this.state.showDatePicker ?
        <DatePickerIOS
          style={{backgroundColor:'#CCCCCC'}}
          date={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
        />
         : <View />

    return (
      <View>

        <View style={[styles.formContainer, { flexDirection: 'row-reverse', borderBottomWidth: 1, borderBottomColor:'rgb(96, 94, 94)'}]}>

          <View style={{flex: 1,flexDirection:'row-reverse'}}>

            <TouchableOpacity
              style={{alignSelf:'center'}}
              onPress={() => this.setState({showDatePicker: !this.state.showDatePicker})}>
            <Icon2  name='chevron-down' size={20} color='#FFFFFF' />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({showDatePicker: !this.state.showDatePicker})}>
              <Text style={[styles.normalText, {paddingTop:4, paddingRight:10}]}>{this._getCurrentDate()}</Text>
            </TouchableOpacity>

          </View>

          <Text style={[styles.normalText, { paddingTop:4, flex: 1.5}]}>{this.props.label}</Text>

        </View>

        {showDatePicker}

      </View>
    );
  }
}


export default connect()(DatePicker)

/*

<View style={[styles.formContainer, {flex:1,  borderBottomWidth: 1, borderBottomColor:'rgb(96, 94, 94)'}]}>

  <View style={{flex:1, flexDirection:'row'}}>
    <Text style={[styles.normalText, {flex : 1, paddingTop:4, marginLeft: 10}]}>Pick up time</Text>

    <TouchableOpacity
      style={{flex: 1, flexDirection: 'row-reverse'}}
      onPress={() => this.setState({showDatePicker: !this.state.showDatePicker})}
      >
      <Icon2 style={styles.dropDownIcon}  name='chevron-down' size={20} color='#FFFFFF' />
      <Text style={[styles.normalText, {paddingTop:4, paddingRight:10}]}>{this._getCurrentDate()}</Text>
    </TouchableOpacity>
  </View>


  {showDatePicker}
</View>*/
