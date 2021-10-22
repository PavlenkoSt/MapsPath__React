import React, { useEffect, useState } from 'react'
import { Content } from 'antd/lib/layout/layout'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IRouteWithId } from '../../models/route'
import Map from '../Map'
import RoutesList from './RoutesList'
import { Button, Card, Row } from 'antd'
import useAction from '../../hooks/useAction'
import formatLength from '../../utilts/formatLength'
import { toast } from 'react-toastify'
import customToastOptions from '../../utilts/customToastOptions'
import s from './Routes.module.scss'

const Routes = () => {
  const [activeRoute, setActiveRoute] = useState(null as unknown as IRouteWithId)

  const { activeRouteId, routes } = useTypedSelector(state => state.routesReducer)

  const { changeFavouriteStatusThunk, removeRouteThunk } = useAction()

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

  const favouriteHandler = () => {
    changeFavouriteStatusThunk(activeRoute.id, !activeRoute.favourite)
    toast('Favourite status of route has changed successfully', customToastOptions)
  }

  return (
    <Content className="content">
      <RoutesList />
      {activeRouteId && (
        <Card title={activeRoute?.title} extra={<span>{formatLength(activeRoute?.length)}</span>}>
          <Row>{activeRoute?.fullDesc}</Row>
          <Row className={s.cardMap}>
            <Map markers={activeRoute?.markers} isAddRoute={false} />
          </Row>
          <Row justify="space-between">
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
