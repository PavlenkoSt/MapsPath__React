import { IRouteWithId } from './../models/route'
import useSearch from './useSearch'
import useSortByFavourite from './useSortByFavourite'

const useSearchAndSort = (routes: IRouteWithId[]) => {
  const { sortedRoutes } = useSortByFavourite(routes)
  const { searchedRoutes, setSearchVal } = useSearch(sortedRoutes)

  return { sortedAndSerchedRoutes: searchedRoutes, setSearchVal }
}

export default useSearchAndSort
