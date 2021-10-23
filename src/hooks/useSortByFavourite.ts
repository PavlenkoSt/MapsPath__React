import { useEffect, useState } from 'react'
import { IRouteWithId } from 'models/route'

const useSortByFavourite = (routes: IRouteWithId[]) => {
  const [sortedRoutes, setSortedRoutes] = useState([] as IRouteWithId[])

  useEffect(() => {
    const sortedRoutes = routes.sort((a, b) => +b.favourite - +a.favourite)
    setSortedRoutes(sortedRoutes)
  }, [routes])

  return { sortedRoutes }
}

export default useSortByFavourite
