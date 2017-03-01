import { combineReducers } from 'redux'

//import other reducers in the app below this line
import navState from './navReducer'
import homeNavState from './homeNavReducer'
import explore from './exploreReducer'
import user from './userReducer'

export default combineReducers({
  user,
  navState,
  homeNavState,
  explore
})
