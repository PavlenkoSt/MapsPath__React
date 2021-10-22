import Search from 'antd/lib/input/Search'
import React from 'react'
import { FullscreenOutlined, LoadingOutlined, RightOutlined, StarOutlined } from '@ant-design/icons'
import s from './Routes.module.scss'
import { Col, List } from 'antd'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IRouteWithId } from '../../models/route'
import useAction from '../../hooks/useAction'
import formatLength from '../../utilts/formatLength'
import useSearch from '../../hooks/useSearch'

const RoutesList = () => {
  const { routes, activeRouteId, isLoading } = useTypedSelector(state => state.routesReducer)

  const { setActiveRouteId } = useAction()

  const { setSearchVal, searchedRoutes } = useSearch(routes)

  const activateHandler = (id: string) => setActiveRouteId(id)

  if (isLoading) return <LoadingOutlined />

  return (
    <Col className={s.routes}>
      <Search onChange={e => setSearchVal(e.target.value)} className={s.input} />
      <List
        dataSource={searchedRoutes}
        className={s.list}
        renderItem={(route: IRouteWithId) => (
          <List.Item
            key={route.id}
            className={activeRouteId === route.id ? `${s.route} ${s.active}` : s.route}
            onClick={() => activateHandler(route.id)}
          >
            <FullscreenOutlined className={s.icon} />
            <List.Item.Meta
              title={
                <Col>
                  {route.favourite && <StarOutlined />} {route.title}
                </Col>
              }
              description={route.shortDesc}
            />
            <Col className={s.distance}>{formatLength(route.length)}</Col>
            <RightOutlined style={{ color: '#333' }} />
          </List.Item>
        )}
      />
    </Col>
  )
}

export default RoutesList
