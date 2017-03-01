import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native'

import styles from '../../styles'
import Icon2 from 'react-native-vector-icons/Entypo'


const {
  Header: NavigationHeader,
} = NavigationExperimental


class Header extends Component {
  _back = () => {
      this.props.pop();
  }

  _home = () => {
      this.props.pop();
      this.props.pop();
  }

  _cart = () => {
      this.props.push({key: 'CartModal'});
  }

  _renderTitleComponent= (props) => {
    return (
      <NavigationHeader.Title >
        <Text style={styles.navHeaderText}>{props.scene.route.key.toUpperCase()}</Text>
      </NavigationHeader.Title>
    );
  }

  _renderBackButton = (props) => {
    if (props.scene.index === 0) {
      return null;
    }

    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={this._back}>
        <Icon2 style={styles.backButton}  name='chevron-left' size={25} color='#FFFFFF' />
      </TouchableOpacity>
    );
  }

  _renderHomeButton = (props) => {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={this._home}>
        <Icon2 style={styles.homeButton}  name='home' size={15} color='#FFFFFF' />
      </TouchableOpacity>
    );
  }

  _renderCartButton = (props) => {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={this._cart}>
        <Icon2 style={styles.cartButton}  name='shopping-cart' size={15} color='#FFFFFF' />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        renderLeftComponent={this._renderHomeButton}
        renderRightComponent={this._renderCartButton}
        style={styles.navHeader}
      />
    );
  }

}

export default Header;
