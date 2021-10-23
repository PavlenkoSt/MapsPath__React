import { AppDispatchType } from './../../index'
import { IRoute, IRouteWithId } from 'models/route'
import { RoutesActionTypes } from './types'
import routesAPI from 'actions/routes'

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
        const firstTarget: IRouteWithId = routes.find(route => route.favourite) || routes[0]
        if (firstTarget) {
          dispatch(routesActionCreators.setActiveRouteId(firstTarget.id))
        }
      }
    } catch (e) {
      console.dir(e)
    } finally {
      dispatch(routesActionCreators.changeIsLoadingStatus(false))
    }
  },
  addRouteThunk: (route: IRoute) => async (dispatch: AppDispatchType) => {
    try {
      const id = await routesAPI.addRoute(route)

      if (id) {
        dispatch(routesActionCreators.addRoute({ ...route, id }))
        dispatch(routesActionCreators.setActiveRouteId(id))
      }
    } catch (e) {
      console.dir(e)
    }
  },
  removeRouteThunk: (id: string) => async (dispatch: AppDispatchType) => {
    try {
      await routesAPI.deleteRoute(id)
      dispatch(routesActionCreators.removeRoute(id))
    } catch (e) {
      console.dir(e)
    }
  },
  changeFavouriteStatusThunk: (id: string, status: boolean) => async (dispatch: AppDispatchType) => {
    try {
      await routesAPI.updateRoute(id, { favourite: status })
      dispatch(routesActionCreators.changeFavouriteStatus({ id, status }))
    } catch (e) {
      console.dir(e)
    }
  },
}

export default routesActionCreators
