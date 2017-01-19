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
import DeliveryDropDown from './DeliveryDropDown'
import TakeOutDropDown from './TakeOutDropDown'

import styles from '../../styles'
import Icon2 from 'react-native-vector-icons/Entypo'


class HomeView extends Component {
  constructor(props) {
        super(props);
        this.state = {
            showDelivery: false,
            showTakeOut: false
        }
    }

  onPressSignUp() {

  }

  render() {
    var showDelivery = this.state.showDelivery ?
        <DeliveryDropDown label='Delivery time' />
         : <View />

     var showTakeOut = this.state.showTakeOut ?
         <TakeOutDropDown label='Delivery time' />
          : <View />

    return (
      <View style={[styles.container, {flexDirection: 'column'}]}>

        <View style={{flexGrow: 10}}>
          <View style={styles.usernameHeader}>
            <Text style={styles.usernameHeaderText}>Welcome, Username!</Text>
          </View>

            <Image
              source={require('../../images/brandIMG.jpg')}
              style = {[styles.promotionImg, {flex:1}]}
            />

          <View>
            <View style={[styles.formContainer, { flexDirection: 'row-reverse', backgroundColor:'#000'}]}>
              <View style={{flex: 1,flexDirection:'row-reverse'}}>
                <TouchableOpacity
                  onPress={() => this.setState({showTakeOut: false, showDelivery: !this.state.showDelivery})}>
                <Icon2  name='chevron-down' size={20} color='#FFFFFF' />
                </TouchableOpacity>
              </View>
              <Text style={[styles.normalText, { paddingTop:4, flex: 1.5}]}>Delivery</Text>
            </View>
          </View>

          {showDelivery}

          <View>
            <View style={[styles.formContainer, { flexDirection: 'row-reverse', backgroundColor:'#000'}]}>
              <View style={{flex: 1,flexDirection:'row-reverse'}}>
                <TouchableOpacity
                  onPress={() => this.setState({showDelivery: false, showTakeOut: !this.state.showTakeOut})}>
                <Icon2  name='chevron-down' size={20} color='#FFFFFF' />
                </TouchableOpacity>
              </View>
              <Text style={[styles.normalText, { paddingTop:4, flex: 1.5}]}>Take out</Text>
            </View>
          </View>

          {showTakeOut}
        </View>

        <View style={{flexGrow: 1, flexDirection:'column-reverse'}}>
          <TouchableHighlight  style={styles.btmButton} onPress={ () => {}}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}


export default connect()(HomeView)
