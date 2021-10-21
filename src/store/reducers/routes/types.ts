import RouteType from '../../../models/route'

export type RoutesStateType = {
  routes: RouteType[]
  activeRoute: RouteType
}

export enum RoutesActionTypes {
  ADD_ROUTE = 'ADD_ROUTE',
}

type AddRouteType = {
  type: RoutesActionTypes.ADD_ROUTE
  payload: RouteType
}

export type WeatherActionCreatorsType = AddRouteType
