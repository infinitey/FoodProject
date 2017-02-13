import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  NavigationExperimental,
  Image,
  TouchableHighlight
} from 'react-native'

const {
  Header: NavigationHeader,
} = NavigationExperimental


class Header extends Component {
  _back = () => {
      this.props.pop();
  }


  _renderTitleComponent= (props) => {
    return (
      <NavigationHeader.Title >
        <Text style={styles.navHeaderText}>{props.scene.route.key.toUpperCase()}</Text>
      </NavigationHeader.Title>
    );
  }

  _renderCloseButton = (props) => {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={this._back}>
        <Icon2 style={styles.backButton}  name='cross' size={25} color='#FFFFFF' />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        renderLeftComponent={this._renderCloseButton}
        style={styles.navHeader}
        onNavigateBack={this._back}
      />
    );
  }

}

export default Header;
