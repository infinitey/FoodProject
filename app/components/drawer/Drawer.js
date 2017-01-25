import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import styles from '../../styles'
import colors from '../../colors'

import Icon2 from 'react-native-vector-icons/Entypo'

export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen : false,
    }
  }

  render() {
    console.log(this.props.contentView);

    return(
      <View >
        <View style={[styles.drawerHeader]}>

          <View style={{flex: 1,flexDirection:'row'}}>

            <Text style={[styles.normalText,{paddingLeft:10, alignSelf:'center'}]}>
              {this.props.categoryName}
            </Text>

            <View style={{flex: 1,flexDirection:'row-reverse'}}>
              <TouchableOpacity
                style={{alignSelf:'center', marginRight:10}}
                onPress={() => this.setState({isDrawerOpen: !this.state.isDrawerOpen})}>
                <Icon2 name={this.state.isDrawerOpen? 'chevron-up' : 'chevron-down'} size={20} color='#FFFFFF' />
              </TouchableOpacity>
            </View>

          </View>

        </View>

        <View style={this.state.isDrawerOpen ? {height:90} : {height:0}}>
          {this.state.isDrawerOpen ? this.props.contentView : <View /> }
        </View>
      </View>

    );
  }
}

/*
<View style={[styles.drawerHeader]}>

  <View style={{flex: 1,flexDirection:'row'}}>

    <Text style={[styles.normalText,{paddingLeft:10, alignSelf:'center'}]}>
      {this.props.categoryName}
    </Text>

    <View style={{flex: 1,flexDirection:'row-reverse'}}>
      <TouchableOpacity
        style={{alignSelf:'center', marginRight:10}}
        onPress={() => this.setState({isDrawerOpen: !this.state.isDrawerOpen})}>
        <Icon2 name={this.state.isDrawerOpen? 'chevron-up' : 'chevron-down'} size={20} color='#FFFFFF' />
      </TouchableOpacity>
    </View>

  </View>

</View>

<View style={this.state.isDrawerOpen ? {height:90} : {height:0}}>
  {this.state.isDrawerOpen ? this.props.contentView : <View /> }
</View>
*/
