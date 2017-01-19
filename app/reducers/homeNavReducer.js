import {
  PUSH_ROUTE_HOME,
  POP_ROUTE_HOME,
  RESTART_ROUTE_HOME
} from '../actions/navigation'

import pushRoute from './nav/push_route'
import popRoute from './nav/pop_route'
import restartRoute from './nav/restart_route'

const initialState = {
  index: 0,
  routes: [{ key: 'Home'}],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE_HOME:
      return pushRoute( state, action )
    case POP_ROUTE_HOME:
      return popRoute( state, action )
    case RESTART_ROUTE_HOME:
      return restartRoute( state, action )
    default:
      return state
  }
}
