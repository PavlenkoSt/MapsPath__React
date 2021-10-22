import MarkerType from './marker'

export interface IRoute{
  title: string
  shortDesc: string
  fullDesc: string
  markers: MarkerType[]
  length: number
  favourite: boolean
}

export interface IRouteWithId extends IRoute {
  id: string
}
