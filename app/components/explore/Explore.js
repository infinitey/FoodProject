import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  NavigationExperimental
} from 'react-native';

import styles from '../../styles'

import { push } from '../../actions/navigation'
import { save_explore_index } from '../../actions/explore'

import BrandCard from './BrandCard'


class Explore extends Component {

  render() {
    const { index } = this.props

    return (

      <ScrollView style={styles.container}>
          <BrandCard brandTitle='MASTERCAFE' />
          <BrandCard brandTitle='MASTERPATTY' />
          <BrandCard brandTitle='MASTERSLICE' />
          <BrandCard brandTitle='MASTERSALAD' />
          <BrandCard brandTitle='MASTERSUB' />
          <BrandCard brandTitle='MASTERBAR' />
          <BrandCard brandTitle='MASTERICE' />
          <BrandCard brandTitle='MASTERBED' />
      </ScrollView>
    );
  }

}


export default connect()(Explore)
