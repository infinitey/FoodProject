import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from '../config/configureStore'
import NavContainer from './NavContainer'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavContainer />
      </Provider>
    )
  }
}
