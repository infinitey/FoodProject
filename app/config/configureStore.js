import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/reducer'

import logger from './middleware/logger'

export default function configureStore( initialState ) {
  const middleware = [ logger ]
  const simpleStore = createStore( reducer, initialState, applyMiddleware( ...middleware ) )

  return { ...simpleStore }
  
}
