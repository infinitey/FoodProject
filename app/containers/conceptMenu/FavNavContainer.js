import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Text, NavigationExperimental, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { push, pop } from '../../actions/navigation';

import Header from '../../components/headers/NavHeader';
import Explore from '../../components/explore/Explore';
import Home from '../../components/home/Home';
import FavouriteItem from '../../components/favourite/FavouriteItem'

import styles from '../../styles'


class FavNavContainer extends Component {
  render() {
    return (
      <ScrollView style={[styles.container, {flexDirection:'column'}]}>
        <FavouriteItem
          itemName='Sample Product'
          itemPrice={88.88}
          itemQty={3}
          itemMod='Modifier 1'
          itemAddon='Addon 1'
          itemAddonPrice={8.88}
        />
        <FavouriteItem
          itemName='Not So Simple Product'
          itemPrice={88.88}
          itemQty={8}
          itemMod='Modifier 1'
          itemAddon='Addon 1'
          itemAddonPrice={9.98}
        />
        <FavouriteItem
          itemName='Sample Product'
          itemPrice={88.88}
          itemQty={3}
          itemMod='Modifier 1'
          itemAddon='Addon 1'
          itemAddonPrice={8.88}
        />

        <FavouriteItem
          itemName='Sample Product'
          itemPrice={88.88}
          itemQty={3}
          itemMod='Modifier 1'
          itemAddon='Addon 1'
          itemAddonPrice={8.88}
        />

        <FavouriteItem
          itemName='Sample Product'
          itemPrice={88.88}
          itemQty={3}
          itemMod='Modifier 1'
          itemAddon='Addon 1'
          itemAddonPrice={8.88}
        />
      </ScrollView>
    );
  }
}

export default FavNavContainer;
