import React, { useEffect, useState } from 'react'
import { Content } from 'antd/lib/layout/layout'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import RouteType from '../../models/route'
import Diviner from '../Diviner'
import Map from '../Map'
import RoutesList from './RoutesList'

const Routes = () => {
  const [activeRoute, setActiveRoute] = useState(null as unknown as RouteType)

  const { activeRouteId, routes } = useTypedSelector(state => state.routesReducer)

  useEffect(() => {
    getActiveRoute()
  }, [activeRouteId])

  const getActiveRoute = () => {
    const searchedRoute = routes.find((route: RouteType) => route.id === activeRouteId)
    if (searchedRoute) {
      setActiveRoute(searchedRoute)
    }
  }

  return (
    <Content className="content">
      <RoutesList />
      <Diviner />
      {activeRouteId && <Map markers={activeRoute?.markers} isAddRoute={false} />}
    </Content>
  )
}

export default Routes
