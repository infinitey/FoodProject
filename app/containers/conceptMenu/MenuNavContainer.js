import React, { Component, PropTypes } from 'react';
import { View, Text, NavigationExperimental } from 'react-native';
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
  createProduct () {
      <ProductDesc
        productName='Product name'
        productCost='$99.88'
        productQty='8X'
        productDesc='This is a description that I clearly do not know how to type. Please advise me how to type this description properly'
      />
  }

  render() {
    return (
      <View style={styles.container}>
        <Drawer categoryName='Category 1' contentView={this.createProduct.bind(this)} />
        <ProductDesc
          productName='Product name'
          productCost='$99.88'
          productQty='8X'
          productDesc='This is a description that I clearly do not know how to type. Please advise me how to type this description properlyThis is a description that I clearly do not know how to type. Please advise me how to type this description properlyThis is a description that I clearly do not know how to type. Please advise me how to type this description properly'
        />
      </View>
    );
  }
}

export default MenuNavContainer;
