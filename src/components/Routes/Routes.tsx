import React, { useEffect, useState } from 'react'
import { Content } from 'antd/lib/layout/layout'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IRouteWithId } from '../../models/route'
import Diviner from '../Diviner'
import Map from '../Map'
import RoutesList from './RoutesList'
import { Button, Card, Row } from 'antd'
import useAction from '../../hooks/useAction'
import formatLength from '../../utilts/formatLength'
import { toast } from 'react-toastify'
import customToastOptions from '../../utilts/customToastOptions'

const Routes = () => {
  const [activeRoute, setActiveRoute] = useState(null as unknown as IRouteWithId)

  const { activeRouteId, routes } = useTypedSelector(state => state.routesReducer)

  const { changeFavouriteStatus, removeRouteThunk } = useAction()

  useEffect(() => {
    getActiveRoute()
  }, [activeRouteId])

  const getActiveRoute = () => {
    const searchedRoute = routes.find((route: IRouteWithId) => route.id === activeRouteId)
    if (searchedRoute) {
      setActiveRoute(searchedRoute)
    }
  }

  const removeHandler = () => {
    removeRouteThunk(activeRoute.id)
    toast('Route removed successfully', customToastOptions)
  }

  const favouriteHandler = () => changeFavouriteStatus({ id: activeRoute.id, status: !activeRoute.favourite })

  return (
    <Content className="content">
      <RoutesList />
      <Diviner />
      {activeRouteId && (
        <Card
          title={activeRoute?.title}
          extra={<span>{formatLength(activeRoute?.length)}</span>}
          style={{ width: 460 }}
        >
          <Row style={{ marginBottom: 20 }}>{activeRoute?.fullDesc}</Row>
          <Map markers={activeRoute?.markers} isAddRoute={false} />
          <Row justify="space-between" style={{ marginTop: 20 }}>
            <Button type="primary" ghost onClick={favouriteHandler}>
              {activeRoute?.favourite ? 'Remove from favourite' : 'Add to favourites'}
            </Button>
            <Button type="primary" danger onClick={removeHandler}>
              Remove
            </Button>
          </Row>
        </Card>
      )}
    </Content>
  )
}

export default Routes
