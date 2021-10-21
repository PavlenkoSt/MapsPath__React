import RouteType from '../../../models/route'
import { RoutesActionTypes, RoutesStateType, WeatherActionCreatorsType } from './types'

const initialState: RoutesStateType = {
  routes: [],
  activeRoute: null as unknown as RouteType,
}

const routesReducer = (state = initialState, action: WeatherActionCreatorsType) => {
  switch (action.type) {
    case RoutesActionTypes.ADD_ROUTE:
      return { ...state, routes: [...state.routes, action.payload] }
    default:
      return state
  }
}

export default routesReducer
