import React, { Component, PropTypes } from 'react';
import { View, Text, NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

import { push, pop } from '../../actions/navigation';

import Header from '../../components/headers/NavHeader';
import Explore from '../../components/explore/Explore';
import Home from '../../components/home/Home';
import TakeOut from '../../components/home/TakeOut'

import styles from '../../styles'

class MenuNavContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          HAHAHAHAHAH
        </Text>
      </View>
    );
  }
}

export default MenuNavContainer;
