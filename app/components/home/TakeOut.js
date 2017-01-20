import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import colors from '../../colors'
import styles from '../../styles'

import MapView from 'react-native-maps';
import StoreInfoCard from './StoreInfoCard';

import { push_home, pop_home } from '../../actions/navigation';

class TakeOut extends Component {
  submitStoreInfo = () => {
    this.props.dispatch(pop_home())
  }

  

  render() {
    return (
      <View style ={[styles.mapContainer,{backgroundColor: 'rgb(0, 0, 0)'}]}>
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
         <ScrollView >
           <StoreInfoCard onSelectStore={this.submitStoreInfo}/>
           <StoreInfoCard onSelectStore={this.submitStoreInfo}/>
           <StoreInfoCard onSelectStore={this.submitStoreInfo}/>
           <StoreInfoCard onSelectStore={this.submitStoreInfo}/>
         </ScrollView>


       </View>


    );
  }
}


export default connect()(TakeOut)
