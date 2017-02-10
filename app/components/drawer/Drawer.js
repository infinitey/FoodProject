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

import { connect } from 'react-redux';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen : false,
      wHeight: Dimensions.get('window').height,
      toCheckView: false,
      drawerHeight: 0,
    }
  }

  //(event) => { this.logDrawerLayout(event.nativeEvent.layout) }

  calculateYToMove(layout) {
    const {x, y, width, height} = layout;

    this.setState({drawerHeight: height})

    if(this.state.isDrawerOpen &&
      y !== 0　&&
      height > this.state.drawerHeight
    ) {
      console.log("==============================" );
      console.log("y: " + y);
      console.log("height: " + height )
      let moveTo = (y + height + 145) - Dimensions.get('window').height

      //y - height + 50

      if(moveTo < 0 || (y+height)< Dimensions.get('window').height) moveTo = 0

      console.log("Moving To: " + moveTo)
      return moveTo;
    }
  }

  render() {

    return(
      <View ref='drawer' onLayout={ (event) => {this.props.onChangeScroll(this.calculateYToMove(event.nativeEvent.layout))} }>
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

export default connect()(Drawer)
