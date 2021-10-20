import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'
import s from './Routes.module.scss'

const Routes = () => {
  const [searchValue, setSearchValue] = useState('')

  const onSearch = () => {
    console.log(searchValue)
  }

  return (
    <div className={s.routes}>
      <Search value={searchValue} onChange={e => setSearchValue(e.target.value)} onSearch={onSearch} width="100%" />
    </div>
  )
}

export default Routes
