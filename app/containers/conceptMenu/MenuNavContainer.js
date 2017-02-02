import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView, NavigationExperimental } from 'react-native';
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
    }
  }

  calculateHeight() {
    categoryHeight= 4 * 35;
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
      <View style={[styles.container]}>
        <ScrollView>
          <Drawer categoryName='Category 1' products={[productA, productB]} />
          <Drawer categoryName='Category 2' products={[productA, productB, productC]} />
          <Drawer categoryName='Category 3' products={[productA, productB]} />
          <Drawer categoryName='Category 4' products={[productA, productB, productC]} />
        </ScrollView>
      </View>
    );
  }
}

export default MenuNavContainer;
