import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

import styles from '../../styles'
import colors from '../../colors'

import Icon2 from 'react-native-vector-icons/Entypo'
import ProductDesc from '../conceptMenu/ProductDesc'

export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen : false,
      wHeight: Dimensions.get('window').height,
      toCheckView: false
    }
  }

  logDrawerLayout(layout) {
    const {x, y, width, height} = layout;
    console.log("--------------------------");
    console.log(this.state);

    if(this.state.isDrawerOpen &&
      this.state.toCheckView &&
      (128 + y + height) > Dimensions.get('window').height)
    {
      console.log('It\'s time to shift the view down!')
    }

    this.setState({toCheckView:false})
  }

  render() {

    return(
      <View ref='drawer' onLayout={(event) => { this.logDrawerLayout(event.nativeEvent.layout) }}>
        <View style={[styles.drawerHeader]}>

          <View style={{flex: 1,flexDirection:'row'}}>

            <Text style={[styles.normalText,{paddingLeft:10, alignSelf:'center'}]}>
              {this.props.categoryName}
            </Text>

            <View style={{flex: 1,flexDirection:'row-reverse'}}>
              <TouchableOpacity
                style={{alignSelf:'center', marginRight:10}}
                onPress={() => this.setState({isDrawerOpen: !this.state.isDrawerOpen, toCheckView: true})}>
                <Icon2 name={this.state.isDrawerOpen? 'chevron-up' : 'chevron-down'} size={20} color='#FFFFFF' />
              </TouchableOpacity>
            </View>

          </View>

        </View>

        <View style={this.state.isDrawerOpen ? {height:this.props.products.length*90} : {height:0}}>
          {this.state.isDrawerOpen && this.props.products.length > 0 ?
            this.props.products.map((product)  => {
              return(
                <ProductDesc
                    key={product.id}
                    productName={product.name}
                    productCost={product.cost}
                    productQty={product.qty}
                    productDesc= {product.desc}
                />
              )
            })
             : <View /> }
        </View>
        <View >
        </View>
      </View>

    );
  }
}
