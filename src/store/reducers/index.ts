import { combineReducers } from 'redux'
import routesReducer from './routes'

const rootReducer = combineReducers({
  routesReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>

export default rootReducer
