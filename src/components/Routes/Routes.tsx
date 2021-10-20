import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'
import { FullscreenOutlined, RightOutlined } from '@ant-design/icons'
import s from './Routes.module.scss'
import { List } from 'antd'

const Routes = () => {
  const [searchValue, setSearchValue] = useState('')

  const mock = [{ id: 0, title: 'title', desc: 'desc', distance: '12 km' }]

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
        dataSource={mock}
        className={s.list}
        renderItem={route => (
          <List.Item key={route.id} className={s.route}>
            <FullscreenOutlined className={s.icon} />
            <List.Item.Meta title={<a href="https://ant.design">{route.title}</a>} description={route.desc} />
            <div className={s.distance}>{route.distance}</div>
            <RightOutlined className={s.arr} />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Routes
