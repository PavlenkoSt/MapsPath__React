import React, { useEffect, useState } from 'react'
import { Content } from 'antd/lib/layout/layout'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import RouteType from '../../models/route'
import Diviner from '../Diviner'
import Map from '../Map'
import RoutesList from './RoutesList'
import { Button, Card } from 'antd'
import s from './Routes.module.scss'
import useAction from '../../hooks/useAction'

const Routes = () => {
  const [activeRoute, setActiveRoute] = useState(null as unknown as RouteType)

  const { activeRouteId, routes } = useTypedSelector(state => state.routesReducer)

  const { changeFavouriteStatus } = useAction()

  useEffect(() => {
    getActiveRoute()
  }, [activeRouteId])

  const getActiveRoute = () => {
    const searchedRoute = routes.find((route: RouteType) => route.id === activeRouteId)
    if (searchedRoute) {
      setActiveRoute(searchedRoute)
    }
  }

  const favouriteHandler = () => changeFavouriteStatus({ id: activeRoute.id, status: !activeRoute.favourite })

  return (
    <Content className="content">
      <RoutesList />
      <Diviner />
      {activeRouteId && (
        <Card title={activeRoute?.title} extra={<span>{activeRoute?.length}</span>} style={{ width: 460 }}>
          <p>{activeRoute?.fullDesc}</p>
          <Map markers={activeRoute?.markers} isAddRoute={false} />
          <div className={s.btns}>
            <Button type="primary" ghost onClick={favouriteHandler}>
              {activeRoute?.favourite ? 'Remove from favourite' : 'Add to favourites'}
            </Button>
            <Button type="primary" danger>
              Remove
            </Button>
          </div>
        </Card>
      )}
    </Content>
  )
}

export default Routes
