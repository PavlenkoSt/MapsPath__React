import { IRouteWithId } from '../../../models/route'

export type RoutesStateType = {
  routes: IRouteWithId[]
  activeRouteId: string | null
  isLoading: boolean
}

export enum RoutesActionTypes {
  SET_ROUTES = 'SET_ROUTES',
  ADD_ROUTE = 'ADD_ROUTE',
  REMOVE_ROUTE = 'REMOVE_ROUTE',
  SET_ACTIVE_ROUTE_ID = 'SET_ACTIVE_ROUTE_ID',
  CHANGE_FAVOURITE_STATUS = 'CHANGE_FAVOURITE_STATUS',
  CHANGE_IS_LOADING_STATUS = 'CHANGE_IS_LOADING_STATUS',
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

type ChangeIsLoading = {
  type: RoutesActionTypes.CHANGE_IS_LOADING_STATUS
  payload: boolean
}

export type WeatherActionCreatorsType =
  | AddRouteType
  | SetActiveRouteId
  | ChangeFavouriteStatus
  | RemoveRoute
  | SetRoutes
  | ChangeIsLoading
