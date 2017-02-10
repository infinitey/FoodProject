import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView, TouchableHighlight,  NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

import { push, pop } from '../../actions/navigation';

import Header from '../../components/headers/NavHeader';
import Explore from '../../components/explore/Explore';
import Home from '../../components/home/Home';
import TakeOut from '../../components/home/TakeOut'

import styles from '../../styles'

class ProfileNavContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

            <View style={{padding:10, borderBottomWidth: 1, borderBottomColor:'rgb(96, 94, 94)'}}>
              <Text style={styles.normalText}>
                Promotion name
              </Text>
              <Text style={[styles.tabText, {paddingTop:4}]}>
                Lorem ipsum dolor sit amet, consectuer adpisicing eli. Ut egestas, nula vel sucipit onrnare, lascus ante.
              </Text>
              <TouchableHighlight>
                <Text style={[styles.tabText, {fontWeight:'bold', color: '#FFF'}]}>
                  See more...
                </Text>
              </TouchableHighlight>
            </View>

            <View style={{padding:10, borderBottomWidth: 1, borderBottomColor:'rgb(96, 94, 94)'}}>
              <Text style={styles.normalText}>
                Promotion name
              </Text>
              <Text style={[styles.tabText, {paddingTop:4}]}>
                Lorem ipsum dolor sit amet, consectuer adpisicing eli. Ut egestas, nula vel sucipit onrnare, lascus ante.
              </Text>
              <TouchableHighlight>
                <Text style={[styles.tabText, {fontWeight:'bold', color: '#FFF'}]}>
                  See more...
                </Text>
              </TouchableHighlight>
            </View>

            <View style={{padding:10, borderBottomWidth: 1, borderBottomColor:'rgb(96, 94, 94)'}}>
              <Text style={styles.normalText}>
                Promotion name
              </Text>
              <Text style={[styles.tabText, {paddingTop:4}]}>
                Lorem ipsum dolor sit amet, consectuer adpisicing eli. Ut egestas, nula vel sucipit onrnare, lascus ante.
              </Text>
              <TouchableHighlight>
                <Text style={[styles.tabText, {fontWeight:'bold', color: '#FFF'}]}>
                  See more...
                </Text>
              </TouchableHighlight>
            </View>

            <View style={{padding:10, borderBottomWidth: 1, borderBottomColor:'rgb(96, 94, 94)'}}>
              <Text style={styles.normalText}>
                Promotion name
              </Text>
              <Text style={[styles.tabText, {paddingTop:4}]}>
                Lorem ipsum dolor sit amet, consectuer adpisicing eli. Ut egestas, nula vel sucipit onrnare, lascus ante.
              </Text>
              <TouchableHighlight>
                <Text style={[styles.tabText, {fontWeight:'bold', color: '#FFF'}]}>
                  See more...
                </Text>
              </TouchableHighlight>
            </View>

        </ScrollView>
      </View>
    );
  }
}

export default ProfileNavContainer;
