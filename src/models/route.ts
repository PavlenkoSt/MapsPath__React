import MarkerType from './marker'

type RouteType = {
  id: number
  title: string
  shortDesc: string
  fullDesc: string
  markers: MarkerType[]
  length: number
  favourite: boolean
}

export default RouteType
