import { IRouteWithId } from '../../../models/route'
import { RoutesActionTypes, RoutesStateType, WeatherActionCreatorsType } from './types'

const initialState: RoutesStateType = {
  routes: [] as IRouteWithId[],
  activeRouteId: null,
  isLoading: false,
}

const routesReducer = (state = initialState, action: WeatherActionCreatorsType) => {
  switch (action.type) {
    case RoutesActionTypes.SET_ROUTES:
      return { ...state, routes: action.payload }
    case RoutesActionTypes.ADD_ROUTE:
      return { ...state, routes: [...state.routes, action.payload] }
    case RoutesActionTypes.SET_ACTIVE_ROUTE_ID:
      return { ...state, activeRouteId: action.payload }
    case RoutesActionTypes.CHANGE_IS_LOADING_STATUS:
      return { ...state, isLoading: action.payload }
    case RoutesActionTypes.REMOVE_ROUTE:
      return {
        ...state,
        routes: state.routes.filter(route => route.id !== action.payload),
        activeRouteId: state.activeRouteId === action.payload ? null : state.activeRouteId,
      }
    case RoutesActionTypes.CHANGE_FAVOURITE_STATUS:
      const updatedRoutes = state.routes.map(route => {
        if (route.id === action.payload.id) {
          route.favourite = action.payload.status
        }
        return route
      })
      return {
        ...state,
        routes: updatedRoutes.sort((a, b) => +b.favourite - +a.favourite),
      }
    default:
      return state
  }
}

export default routesReducer
