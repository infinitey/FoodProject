import React, { Component, PropTypes } from 'react';
import { View, Text, NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

import { push, pop } from '../actions/navigation';
import { push_home, pop_home } from '../actions/navigation';

import HomeHeader from '../components/headers/HomeNavHeader';
import Header from '../components/headers/NavHeader';
import ModalHeader from '../components/headers/ModalHeader';

import Explore from '../components/explore/Explore';
import Home from '../components/home/Home';
import TakeOut from '../components/home/TakeOut'
import MenuTabContainer from './conceptMenu/MenuTabContainer'

import CartModal from '../components/conceptMenu/CartModal'
import ProductModal from '../components/conceptMenu/ProductModal'
import AddressModal from '../components/conceptMenu/AddressModal'

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental


class HomeNavContainer extends Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Explore':
        return <Explore />
      case 'Home':
        return <Home />
      case 'TakeOut':
        return <TakeOut />
      case 'MenuTabContainer':
        return <MenuTabContainer />
      case 'CartModal':
        return <CartModal />
      case 'ProductModal':
        return <ProductModal />
      case 'AddressModal':
        return <AddressModal />
    }
  }

  _renderHeader = (sceneProps) => {
    const { homeNavState } = this.props

    if(homeNavState.prevPushedRoute && homeNavState.prevPushedRoute.type === 'modal' &&
      homeNavState.prevPushedRoute.key === homeNavState.routes[homeNavState.index].key)
    {
      // render modal header
      return(
        <ModalHeader
          pop={this.props.pop_home}
          {...sceneProps}
        />
      );
    }
    else if(homeNavState.prevPushedRoute && homeNavState.prevPushedRoute.key === 'CartModal' &&
      homeNavState.prevPushedRoute.key === homeNavState.routes[homeNavState.index].key)
    {
      // render modal header
      return(
        <Header
          pop={this.props.pop_home}
          {...sceneProps}
        />
      );
    }
    else{
      return (
        <HomeHeader
          pop={this.props.pop}
          push={this.props.push_home}
          {...sceneProps}
        />
      );
    }

  }


  render() {
    const { homeNavState } = this.props
    let direction = 'horizontal'

    if(homeNavState.prevPushedRoute && homeNavState.prevPushedRoute.type === 'modal')
    {
        direction='vertical'
    }

    return (
      <NavigationCardStack
        direction={direction}
        renderHeader={this._renderHeader}
        navigationState={this.props.homeNavState}
        renderScene={this._renderScene}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  homeNavState: state.homeNavState,
})

export default connect(
  mapStateToProps,
  {
    push_home: (route) => push_home(route),
    pop_home: () => pop_home(),
    push: (route) => push(route),
    pop: () => pop(),
  }
) (HomeNavContainer);
