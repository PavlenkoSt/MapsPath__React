import { IRouteWithId } from '../../../models/route'

export type RoutesStateType = {
  routes: IRouteWithId[]
  activeRouteId: string | null
}

export enum RoutesActionTypes {
  SET_ROUTES = 'SET_ROUTES',
  ADD_ROUTE = 'ADD_ROUTE',
  REMOVE_ROUTE = 'REMOVE_ROUTE',
  SET_ACTIVE_ROUTE_ID = 'SET_ACTIVE_ROUTE_ID',
  CHANGE_FAVOURITE_STATUS = 'CHANGE_FAVOURITE_STATUS',
}

type AddRouteType = {
  type: RoutesActionTypes.ADD_ROUTE
  payload: IRouteWithId
}

type SetActiveRouteId = {
  type: RoutesActionTypes.SET_ACTIVE_ROUTE_ID
  payload: string
}

type ChangeFavouriteStatus = {
  type: RoutesActionTypes.CHANGE_FAVOURITE_STATUS
  payload: { id: string; status: boolean }
}

type RemoveRoute = {
  type: RoutesActionTypes.REMOVE_ROUTE
  payload: string
}

type SetRoutes = {
  type: RoutesActionTypes.SET_ROUTES
  payload: IRouteWithId[]
}

export type WeatherActionCreatorsType =
  | AddRouteType
  | SetActiveRouteId
  | ChangeFavouriteStatus
  | RemoveRoute
  | SetRoutes
