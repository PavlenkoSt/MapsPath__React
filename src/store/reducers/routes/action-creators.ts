import { AppDispatchType } from './../../index'
import { IRouteWithId } from '../../../models/route'
import { RoutesActionTypes } from './types'
import routesAPI from '../../../actions/routes'

const routesActionCreators = {
  setRoutes: (payload: IRouteWithId[]) => ({ type: RoutesActionTypes.SET_ROUTES, payload } as const),
  addRoute: (payload: IRouteWithId) => ({ type: RoutesActionTypes.ADD_ROUTE, payload } as const),
  setActiveRouteId: (payload: string) => ({ type: RoutesActionTypes.SET_ACTIVE_ROUTE_ID, payload } as const),
  removeRoute: (payload: string) => ({ type: RoutesActionTypes.REMOVE_ROUTE, payload } as const),
  changeIsLoadingStatus: (payload: boolean) => ({ type: RoutesActionTypes.CHANGE_IS_LOADING_STATUS, payload } as const),
  changeFavouriteStatus: (payload: { id: string; status: boolean }) =>
    ({ type: RoutesActionTypes.CHANGE_FAVOURITE_STATUS, payload } as const),

  // thunks
  setRoutesThunk: () => async (dispatch: AppDispatchType) => {
    try {
      dispatch(routesActionCreators.changeIsLoadingStatus(true))
      const routes = await routesAPI.getRoutes()

      if (routes && routes.length) {
        dispatch(routesActionCreators.setRoutes(routes))
      }
    } catch (e) {
      console.dir(e)
    } finally {
      dispatch(routesActionCreators.changeIsLoadingStatus(false))
    }
  },
}

export default routesActionCreators
