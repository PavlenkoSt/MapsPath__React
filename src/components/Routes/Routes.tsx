import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'
import { FullscreenOutlined, RightOutlined } from '@ant-design/icons'
import s from './Routes.module.scss'
import { List } from 'antd'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import RouteType from '../../models/route'

const Routes = () => {
  const [searchValue, setSearchValue] = useState('')

  const { routes } = useTypedSelector(state => state.routesReducer)

  const onSearch = () => {
    console.log(searchValue)
  }

  return (
    <div className={s.routes}>
      <Search
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onSearch={onSearch}
        className={s.input}
      />
      <List
        dataSource={routes}
        className={s.list}
        renderItem={(route: RouteType) => (
          <List.Item key={route.id} className={s.route}>
            <FullscreenOutlined className={s.icon} />
            <List.Item.Meta title={<div>{route.title}</div>} description={route.shortDesc} />
            <div className={s.distance}>{route.length}</div>
            <RightOutlined className={s.arr} />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Routes
