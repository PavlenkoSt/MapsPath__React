import React from 'react'
import Search from 'antd/lib/input/Search'
import { FullscreenOutlined, LoadingOutlined, RightOutlined, StarOutlined } from '@ant-design/icons'
import styles from 'sources/styles/Routes.module.scss'
import { Col, List } from 'antd'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { IRouteWithId } from 'models/route'
import useAction from 'hooks/useAction'
import formatLength from 'utilts/formatLength'
import useSearchAndSort from 'hooks/useSortAndSearch'

const RoutesList = () => {
  const { routes, activeRouteId, isLoading } = useTypedSelector(state => state.routesReducer)

  const { setActiveRouteId } = useAction()

  const { setSearchVal, sortedAndSerchedRoutes } = useSearchAndSort(routes)

  const activateHandler = (id: string) => setActiveRouteId(id)

  if (isLoading) return <LoadingOutlined />

  return (
    <Col className={styles.routes}>
      <Search onChange={e => setSearchVal(e.target.value)} className={styles.input} />
      <List
        dataSource={sortedAndSerchedRoutes}
        className={styles.list}
        renderItem={(route: IRouteWithId) => (
          <List.Item
            key={route.id}
            className={activeRouteId === route.id ? `${styles.route} ${styles.active}` : styles.route}
            onClick={() => activateHandler(route.id)}
          >
            <FullscreenOutlined className={styles.icon} />
            <List.Item.Meta
              title={
                <Col>
                  {route.favourite && <StarOutlined />} {route.title}
                </Col>
              }
              description={route.shortDesc}
            />
            <Col className={styles.distance}>{formatLength(route.length)}</Col>
            <RightOutlined className={styles.arr} />
          </List.Item>
        )}
      />
    </Col>
  )
}

export default RoutesList
