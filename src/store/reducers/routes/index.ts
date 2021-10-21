import RouteType from '../../../models/route'
import { RoutesActionTypes, RoutesStateType, WeatherActionCreatorsType } from './types'

const initialState: RoutesStateType = {
  routes: [
    {
      id: 16348124712,
      title: 'test 1',
      shortDesc: 'test 1 test 1',
      fullDesc: 'test 1test 1test 1',
      favourite: false,
      length: '80,2 км',
      markers: [
        {
          lat: 49.907923534382,
          lng: 32.124457568,
          id: 3634817101368,
        },
        {
          lat: 43.90795353597782,
          lng: 22.1261842457568,
          id: 2634817101368,
        },
      ],
    },
    {
      id: 16348404712,
      title: 'test 2',
      shortDesc: 'test 2 test 2',
      fullDesc: 'test 2test 2test 2',
      favourite: false,
      length: '80,2 км',
      markers: [
        {
          lat: 43.9023353597782,
          lng: 36.12432457568,
          id: 14,
        },
        {
          lat: 42.907925397782,
          lng: 24.126184327568,
          id: 263481714368,
        },
      ],
    },
    {
      id: 1634813712,
      title: 'title',
      shortDesc: 'desc',
      fullDesc: 'description',
      favourite: false,
      length: '80,2 км',
      markers: [
        {
          lat: 29.907923582,
          lng: 52.2618492457568,
          id: 1634837101368,
        },
        {
          lat: 13.9079237782,
          lng: 12.12618357568,
          id: 2644817101368,
        },
      ],
    },
  ] as RouteType[],
  activeRouteId: null,
}

const routesReducer = (state = initialState, action: WeatherActionCreatorsType) => {
  switch (action.type) {
    case RoutesActionTypes.ADD_ROUTE:
      return { ...state, routes: [...state.routes, action.payload] }
    case RoutesActionTypes.SET_ACTIVE_ROUTE_ID:
      return { ...state, activeRouteId: action.payload }
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
