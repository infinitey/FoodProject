import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  } from 'react-native'

import styles from '../../styles'
import colors from '../../colors'
import Icon2 from 'react-native-vector-icons/Entypo'

export default class FavouriteItem extends Component {

  render() {
    return (
      <View style={{flexDirection:'row', padding:10, borderBottomWidth: 1, borderBottomColor:'rgb(96, 94, 94)'}}>
        <View style={{flex:1}}>
          <Text style={[styles.normalText, {fontWeight:'bold'}]}>
            {this.props.itemQty}X
          </Text>
        </View>


        <View style={{flex:12}}>

          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={[styles.normalText]}>
              {this.props.itemName}
            </Text>
            <Text style={[styles.normalText]}>
              ${this.props.itemPrice}
            </Text>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:3}}>
              <Text style={[styles.tabText]}>
                {this.props.itemMod}
              </Text>
              <Text style={[styles.tabText]}>

              </Text>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:3}}>
              <Text style={[styles.tabText]}>
                {this.props.itemAddon}
              </Text>
              <Text style={[styles.tabText]}>
                ${this.props.itemAddonPrice}
              </Text>
          </View>

          <View style={{flexDirection:'row-reverse', paddingTop: 12}}>
            <TouchableOpacity>
              <Icon2 style={{paddingRight:5}} name='shopping-cart' size={15} color='#FFFFFF' />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon2 style={{paddingRight:20}} name='circle-with-minus' size={15} color='#FFFFFF' />
            </TouchableOpacity>

          </View>

        </View>


      </View>
    );
  }
}
