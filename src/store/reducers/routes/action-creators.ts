import { IRoute, IRouteWithId } from '../../../models/route'
import { RoutesActionTypes } from './types'

const routesActionCreators = {
  setRoutes: (payload: IRouteWithId[]) => ({ type: RoutesActionTypes.SET_ROUTES, payload } as const),
  addRoute: (payload: IRouteWithId) => ({ type: RoutesActionTypes.ADD_ROUTE, payload } as const),
  setActiveRouteId: (payload: string) => ({ type: RoutesActionTypes.SET_ACTIVE_ROUTE_ID, payload } as const),
  removeRoute: (payload: string) => ({ type: RoutesActionTypes.REMOVE_ROUTE, payload } as const),
  changeFavouriteStatus: (payload: { id: string; status: boolean }) =>
    ({ type: RoutesActionTypes.CHANGE_FAVOURITE_STATUS, payload } as const),
}

export default routesActionCreators
