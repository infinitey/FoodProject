import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  } from 'react-native'

import styles from '../../styles'
import colors from '../../colors'

export default class ProductDesc extends Component {

  render() {
    return (

          <View style={[styles.container, {flexDirection:'row', minHeight:90}]}>

            <TouchableOpacity style={{backgroundColor: colors.submitButtonColor, flex:1, alignItems:'center', justifyContent:'center'}}>
              <Text style={[styles.normalText, {}]}>
                {this.props.productQty}
              </Text>
            </TouchableOpacity>

            <View style={{flex:10}}>

              <View style={{flexDirection:'row', paddingTop:8, paddingLeft:8, paddingRight:8, paddingBottom :4}}>

                <Text style={styles.normalText}>
                  {this.props.productName}
                </Text>

                <View style={{flex:1, flexDirection:'row-reverse'}}>
                  <Text style={[styles.tabText, { color: '#FFFFFF', padding:2, borderWidth:1, borderColor:'#FFFFFF'}]}>
                    {this.props.productCost}
                  </Text>
                </View>

              </View>

              <View style={{ paddingBottom:8, paddingLeft:8, paddingRight:15}}>
                <Text
                  ellipsizeMode='tail'
                  numberOfLines={3}
                  style={[styles.tabText]}
                  >
                  {this.props.productDesc}
                </Text>
              </View>

            </View>

          </View>
    );
  }
}
