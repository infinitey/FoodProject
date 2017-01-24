import React, { Component } from 'react'
import { View } from 'react-native'

import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Zocial'
import Icon2 from 'react-native-vector-icons/Entypo'

import { connect } from 'react-redux'
import styles from '../../styles'
import colors from '../../colors'

import MenuNavContainer from './MenuNavContainer'
import FavNavContainer from './FavNavContainer'
import ProfileNavContainer from './ProfileNavContainer'
import PromoNavContainer from './PromoNavContainer'
import Badge from '../../components/conceptMenu/Badge'

export default class MenuTabContainer extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'menu',
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

    let tabBarStyle = {backgroundColor:'#000000', borderTopWidth: 1, borderColor:colors.tabIconTextColor};
    let sceneStyle = {};

    if(this.state.hideTabBar) {
      tabBarStyle.height = 0;
      tabBarStyle.overflow = 'hidden';
      sceneStyle.paddingBottom = 0;
    }

    return (

      <TabNavigator hidesTabTouch tabBarStyle={tabBarStyle} sceneStyle={sceneStyle} >

        <TabNavigator.Item
          titleStyle={[styles.tabText, {marginTop: -1, marginBottom: 7}]}
          selectedTitleStyle={{color: colors.submitButtonColor}}
          selected={selectedTab === 'menu'}
          title={'Menu'}
          renderIcon={ () => <Icon2 color={colors.tabIconTextColor} name='list' size={20}/>}
          renderSelectedIcon={ () => <Icon2 color={colors.submitButtonColor} name='list' size={20}/>}
          onPress={() => this.changeTab('menu')}>

          <MenuNavContainer hideTabBar={this._hideTabBar.bind(this)} />

        </TabNavigator.Item>

        <TabNavigator.Item
          renderBadge={() => <Badge text='3' />}
          titleStyle={[styles.tabText, {marginTop: -1, marginBottom: 7}]}
          selectedTitleStyle={{color: colors.submitButtonColor}}
          selected={selectedTab === 'promotion'}
          title={'Promotions'}
          renderIcon={ () => <Icon2 color={colors.tabIconTextColor} name='ticket' size={20}/>}
          renderSelectedIcon={ () => <Icon2 color={colors.submitButtonColor} name='ticket' size={20}/>}
          onPress={() => this.changeTab('promotion')}>

          <PromoNavContainer hideTabBar={this._hideTabBar.bind(this)} />

        </TabNavigator.Item>

        <TabNavigator.Item
          titleStyle={[styles.tabText, {marginTop: -3, marginBottom: 7}]}
          selectedTitleStyle={{color: colors.submitButtonColor}}
          selected={selectedTab === 'favourite'}
          title={'Favourites'}
          renderIcon={ () => <Icon2 color={colors.tabIconTextColor} name='heart' size={22}/>}
          renderSelectedIcon={ () => <Icon2 color={colors.submitButtonColor} name='heart' size={22}/>}
          onPress={() => this.changeTab('favourite')}>

          <FavNavContainer hideTabBar={this._hideTabBar.bind(this)} />

        </TabNavigator.Item>

        <TabNavigator.Item
          titleStyle={[styles.tabText, {marginTop: -1, marginBottom: 7}]}
          selectedTitleStyle={{color: colors.submitButtonColor}}
          selected={selectedTab === 'profile'}
          title={'Profile'}
          renderIcon={ () => <Icon2 color={colors.tabIconTextColor} name='user' size={20}/>}
          renderSelectedIcon={ () => <Icon2 color={colors.submitButtonColor} name='user' size={20}/>}
          onPress={() => this.changeTab('profile')}>

          <ProfileNavContainer hideTabBar={this._hideTabBar.bind(this)} />

        </TabNavigator.Item>

      </TabNavigator>

    );
  }
}
