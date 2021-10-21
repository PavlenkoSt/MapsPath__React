import { createStore } from 'redux'
import rootReducer from './reducers'
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = createStore(rootReducer, devToolsEnhancer({}))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export default store
