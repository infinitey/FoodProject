import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux'
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  NavigationExperimental
} from 'react-native';

import styles from '../../styles'

import { push } from '../../actions/navigation'
import { save_explore_index } from '../../actions/explore'


class BrandCard extends Component {
  showLoginView(index) {
    this.props.dispatch(save_explore_index(index))
    this.props.dispatch(push({ key: 'Login' }))
  }

  render() {
    const { index } = this.props

    return (
      <View style={{maxHeight:200}}>
        <TouchableHighlight
          underlayColor='rgba(0,0,0,0)'
          onPress={this.showLoginView.bind(this, index)}>
          <Image
            source={require('../../images/brandIMG.jpg')}
            style = {styles.brandCard}>
            <TouchableHighlight
              underlayColor='rgba(0,0,0,0)'
              onPress={this.showLoginView.bind(this, index)}>
              <Text style={styles.navHeaderText}>{this.props.brandTitle}</Text>
            </TouchableHighlight>
          </Image>
        </TouchableHighlight>
      </View>

    );
  }

}


export default connect()(BrandCard)
