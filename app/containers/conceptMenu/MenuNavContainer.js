import React, { Component, PropTypes } from 'react';
import { Dimensions, View, Text, ScrollView, NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

import { push, pop } from '../../actions/navigation';

import Header from '../../components/headers/NavHeader';
import Explore from '../../components/explore/Explore';
import Home from '../../components/home/Home';
import TakeOut from '../../components/home/TakeOut'

import Drawer from '../../components/drawer/Drawer'
import ProductDesc from '../../components/conceptMenu/ProductDesc'

import styles from '../../styles'

class MenuNavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfCategory: 4,
      noOfRevealedProduct:0,
      data: 'default',
    }
  }

  calculateHeight() {
    categoryHeight= 4 * 35;
  }

  scrollDown (height) {
    this.refs.scrollView.scrollTo({x:0, y:height, animated:false})
  }

  logDrawerLayout(contentWidth, contentHeight) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log("contentWidth: " + contentWidth);
    console.log("contentHeight: " + contentHeight);
    if(contentHeight > 560)
    {
      let height = contentHeight - 560
      this.scrollDown(height)
    }
  }

  onChangeScroll = (data) => {
      console.log(data);
      this.scrollDown(data)
  }

  render() {
    const createProduct = <ProductDesc
        productName='Test Product'
        productCost='$99.88'
        productQty='8X'
        productDesc='This is a description that I clearly do not know how to type. Please advise me how to type this description properlyThis is a description that I clearly do not know how to type. Please advise me how to type this description properlyThis is a description that I clearly do not know how to type. Please advi  se me how to type this description properly　'
      />;

    const createProduct2 = <ProductDesc
        productName='Test2 Product'
        productCost='$99.88'
        productQty='8X'
        productDesc='This is a description that I clearly do not know how to type. Please advise me how to type this description properlyThis is a description that I clearly do not know how to type. Please advise me how to type this description properlyThis is a description that I clearly do not know how to type. Please advi  se me how to type this description properly　'
      />;

    let productA = {
      id: 0,
      name: 'Product A',
      cost: '$99.88',
      qty: '8X',
      desc: 'This is a description that I clearly do not know how to type. Please advise me how to type this description properlyThis is a description that I clearly do not know how to type. Please advise me how to type this description properlyThis is a description that I clearly do not know how to type. Please advi  se me how to type this description properly'
    }

    let productB = {
      id: 1,
      name: 'Product B',
      cost: '$88.88',
      qty: '2X',
      desc: 'This is a description that I clearly do not know how to type. Please advise me how to type this description properlyThis is a description that I clearly do not know how to type. Please advise me how to type this description properlyThis is a description that I clearly do not know how to type. Please advi  se me how to type this description properly'
    }

    let productC = {
      id: 2,
      name: 'Product C',
      cost: '$88.88',
      qty: '2X',
      desc: 'This is a description that I clearly do not know how to type. Please advise me how to type this description properlyThis is a description that I clearly do not know how to type. Please advise me how to type this description properlyThis is a description that I clearly do not know how to type. Please advi  se me how to type this description properly'
    }

    let _scrollToBottomY

    return (
      <View style={[styles.container]} >
        <View style={styles.orderAddressBar}>
          <View>
            <Text style={[styles.tabText, {color: '#FFFFFF'}]}>Delivery: dd/mm/yyyy at hh:mm </Text>

            <Text style={[styles.tabText, {color: '#FFFFFF'}]}>Address, City - Postal code</Text>
          </View>

          <View style={{flex:1, flexDirection:'row-reverse'}}>
            <Text style={[styles.tabText, { color: '#FFFFFF', padding:2, borderWidth:1, borderRadius:2, borderColor:'#FFFFFF', alignSelf:'center'}]}> EDIT</Text>
          </View>

        </View>
        <ScrollView ref='scrollView' >
          <Drawer categoryName='Category 1' onChangeScroll={this.onChangeScroll} products={[productA, productB]} />
          <Drawer categoryName='Category 2' onChangeScroll={this.onChangeScroll} products={[productA, productB, productC]} />
          <Drawer categoryName='Category 3' onChangeScroll={this.onChangeScroll} products={[productA, productB]} />
          <Drawer categoryName='Category 4' onChangeScroll={this.onChangeScroll} products={[productA, productB, productC]} />
        </ScrollView>
      </View>
    );
  }
}

export default MenuNavContainer;
