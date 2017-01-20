import React, { Component } from 'react'
import { View } from 'react-native'

import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Zocial'
import Icon2 from 'react-native-vector-icons/Entypo'

import { connect } from 'react-redux'
import styles from '../../styles'

import MenuNavContainer from './MenuNavContainer'

class MenuTabContainer extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'feed',
      hideTabBar: false,
    }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }

  _hideTabBar(value) {
    this.setState({
      hideTabBar: value
    });
  }

  render() {
    const { selectedTab } = this.state;

    let tabBarStyle = {};
    let sceneStyle = {};

    if(this.state.hideTabBar) {
      tabBarStyle.height = 0;
      tabBarStyle.overflow = 'hidden';
      sceneStyle.paddingBottom = 0;
    }

    return (
      <TabNavigator hidesTabTouch tabBarStyle={tabBarStyle} sceneStyle={sceneStyle} >

        <TabNavigator.Item
          titleStyle={[styles.normalText]}
          selectedTitleStyle={{marginTop:-3, marginBottom: 7, color: colors.navHeader}}
          selected={selectedTab === 'menu'}
          title={selecetedTab === 'menu' ? 'MENU' : null}
          renderIcon={ () => <Icon color={colors.contentBGColor} name='list' size={20}/>}
          renderSelectedIcon={ () => <Icon color={colors.headerBGColor} name='list' size={20}/>}
          onPress={() => this.changeTab('feed')}>

          <MenuNavContainer hideTabBar={this._hideTabBar.bind(this)} />

        </TabNavigator.Item>

      </TabNavigator>
    );
  }
}
