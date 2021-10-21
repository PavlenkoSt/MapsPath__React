import RouteType from '../../../models/route'
import { RoutesActionTypes, RoutesStateType, WeatherActionCreatorsType } from './types'

const initialState: RoutesStateType = {
  routes: [] as RouteType[],
  activeRouteId: null,
}

const routesReducer = (state = initialState, action: WeatherActionCreatorsType) => {
  switch (action.type) {
    case RoutesActionTypes.ADD_ROUTE:
      return { ...state, routes: [...state.routes, action.payload] }
    case RoutesActionTypes.SET_ACTIVE_ROUTE_ID:
      return { ...state, activeRouteId: action.payload }
    default:
      return state
  }
}

export default routesReducer
