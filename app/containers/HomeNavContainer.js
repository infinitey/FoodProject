import React, { Component, PropTypes } from 'react';
import { View, Text, NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

import { push, pop } from '../actions/navigation';
import { push_home, pop_home } from '../actions/navigation';

import Header from '../components/headers/NavHeader';
import Explore from '../components/explore/Explore';
import Home from '../components/home/Home';
import TakeOut from '../components/home/TakeOut'

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
    }
  }

  _renderHeader = (sceneProps) => {
    const { homeNavState } = this.props


      return (
        <Header
          pop={this.props.pop_home}
          push={this.props.push_home}
          {...sceneProps}
        />
      );

  }


  render() {
    const { homeNavState } = this.props
    let direction = 'horizontal'

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
