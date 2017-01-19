import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import colors from '../../colors'
import MapView from 'react-native-maps';

class TakeOut extends Component {
  submitLoginInfo() {
    this.props.dispatch(pop())
  }

  render() {
    return (
      <View style ={styles.container}>
       <MapView
         style={styles.map}
         region={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       </MapView>
     </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default connect()(TakeOut)
