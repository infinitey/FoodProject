import React, { Component, PropTypes } from 'react';
import { View, Text, NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

import { push, pop } from '../actions/navigation';

import Header from '../components/headers/NavHeader';
import Explore from '../components/explore/Explore';
import Login from '../components/login/Login.js';
import ForgotPassword from '../components/login/ForgotPassword.js';
import ChangePassword from '../components/login/ChangePassword.js';
import Register from '../components/login/Register.js';
import RegisterFingerPrint from '../components/login/RegisterFingerPrint.js';
import RegisterPIN from '../components/login/RegisterPIN.js';
import RegisterConfirmation from '../components/login/RegisterConfirmation.js';
import Home from '../components/home/Home.js';
import HomeNavContainer from './HomeNavContainer';

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental



class NavContainer extends Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Explore':
        return <Explore />
      case 'Login':
        return <Login />
      case 'ForgotPassword':
        return <ForgotPassword />
      case 'ChangePassword':
        return <ChangePassword />
      case 'Register':
        return <Register />
      case 'RegisterFingerPrint':
        return <RegisterFingerPrint />
      case 'RegisterPIN':
          return <RegisterPIN />
      case 'RegisterConfirmation':
          return <RegisterConfirmation />
      case 'HomeNavContainer':
        return <HomeNavContainer />
    }
  }

  _renderHeader = (sceneProps) => {
    const { navState } = this.props

    if(navState.prevPushedRoute && navState.prevPushedRoute.key === 'HomeNavContainer') {
      return
    }
    else {
      return (
        <Header
          pop={this.props.pop}
          push={this.props.push}
          {...sceneProps}
        />
      );
    }
  }


  render() {
    const { navState } = this.props
    let direction = 'horizontal'

    return (
      <NavigationCardStack
        direction={direction}
        renderHeader={this._renderHeader}
        navigationState={this.props.navState}
        renderScene={this._renderScene}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  navState: state.navState,
})

export default connect(
  mapStateToProps,
  {
    push: (route) => push(route),
    pop: () => pop(),
  }
) (NavContainer);
