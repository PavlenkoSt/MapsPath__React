import RouteType from '../../../models/route'
import { RoutesActionTypes } from './types'

const routesActionCreators = {
  addRoute: (payload: RouteType) => ({ type: RoutesActionTypes.ADD_ROUTE, payload } as const),
  setActiveRouteId: (payload: number) => ({ type: RoutesActionTypes.SET_ACTIVE_ROUTE_ID, payload } as const),
}

export default routesActionCreators
