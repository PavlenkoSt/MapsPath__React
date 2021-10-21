import RouteType from '../../../models/route'

export type RoutesStateType = {
  routes: RouteType[]
  activeRouteId: number | null
}

export enum RoutesActionTypes {
  ADD_ROUTE = 'ADD_ROUTE',
  SET_ACTIVE_ROUTE_ID = 'SET_ACTIVE_ROUTE_ID',
  CHANGE_FAVOURITE_STATUS = 'CHANGE_FAVOURITE_STATUS',
}

type AddRouteType = {
  type: RoutesActionTypes.ADD_ROUTE
  payload: RouteType
}

type SetActiveRouteId = {
  type: RoutesActionTypes.SET_ACTIVE_ROUTE_ID
  payload: number
}

type ChangeFavouriteStatus = {
  type: RoutesActionTypes.CHANGE_FAVOURITE_STATUS
  payload: { id: number; status: boolean }
}

export type WeatherActionCreatorsType = AddRouteType | SetActiveRouteId | ChangeFavouriteStatus
