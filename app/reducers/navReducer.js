import {
  PUSH_ROUTE,
  POP_ROUTE,
  RESTART_ROUTE
} from '../actions/navigation'

import pushRoute from './nav/push_route'
import popRoute from './nav/pop_route'
import restartRoute from './nav/restart_route'

const initialState = {
  index: 0,
  routes: [{ key: 'Explore', type: 'explore' }],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE:
      return pushRoute( state, action )
    case POP_ROUTE:
      return popRoute( state, action )
    case RESTART_ROUTE:
      return restartRoute( state, action )
    default:
      return state
  }
}
