import { combineReducers } from 'redux'

//import other reducers in the app below this line
import navState from './navReducer'
import homeNavState from './homeNavReducer'
import explore from './exploreReducer'

export default combineReducers({
  navState,
  homeNavState,
  explore
})
