import { IRouteWithId } from './../models/route'
import { useEffect, useState } from 'react'

const useSearch = (routes: IRouteWithId[]) => {
  const [searchVal, setSearchVal] = useState('')
  const [searchedRoutes, setSearchedRoutes] = useState([] as IRouteWithId[])

  useEffect(() => {
    if (searchVal) {
      const search = routes.filter(
        (route: IRouteWithId) => route.title.indexOf(searchVal) >= 0 || route.fullDesc.indexOf(searchVal) >= 0
      )
      setSearchedRoutes(search)
    } else {
      setSearchedRoutes(routes)
    }
  }, [routes, searchVal])

  return { setSearchVal, searchedRoutes }
}

export default useSearch
