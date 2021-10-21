import Search from 'antd/lib/input/Search'
import React, { useEffect, useState } from 'react'
import { FullscreenOutlined, RightOutlined, StarOutlined } from '@ant-design/icons'
import s from './Routes.module.scss'
import { List } from 'antd'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import RouteType from '../../models/route'
import useAction from '../../hooks/useAction'
import formatLength from '../../utilts/formatLength'

const RoutesList = () => {
  const [searchedRoutes, setSearchedRoutes] = useState([] as RouteType[])

  const { routes, activeRouteId } = useTypedSelector(state => state.routesReducer)

  const { setActiveRouteId } = useAction()

  useEffect(() => searchedFilter(''), [routes])

  const searchedFilter = (value: string) => {
    if (value) {
      const search = routes.filter(
        (route: RouteType) => route.title.indexOf(value) >= 0 || route.fullDesc.indexOf(value) >= 0
      )
      setSearchedRoutes(search)
      return
    }
    setSearchedRoutes(routes)
  }

  const activateHandler = (id: number) => setActiveRouteId(id)

  return (
    <div className={s.routes}>
      <Search onChange={e => searchedFilter(e.target.value)} className={s.input} />
      <List
        dataSource={searchedRoutes}
        className={s.list}
        renderItem={(route: RouteType) => (
          <List.Item
            key={route.id}
            className={activeRouteId === route.id ? `${s.route} ${s.active}` : s.route}
            onClick={() => activateHandler(route.id)}
          >
            <FullscreenOutlined className={s.icon} />
            <List.Item.Meta
              title={
                <div>
                  {route.favourite && <StarOutlined />} {route.title}
                </div>
              }
              description={route.shortDesc}
            />
            <div className={s.distance}>{formatLength(route.length)}</div>
            <RightOutlined className={s.arr} />
          </List.Item>
        )}
      />
    </div>
  )
}

export default RoutesList
