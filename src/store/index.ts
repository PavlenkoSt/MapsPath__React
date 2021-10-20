import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

export type RootStateType = typeof store.getState
export type AppDispatchType = typeof store.dispatch

export default store
