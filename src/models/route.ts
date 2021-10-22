import IMarker from './marker'

export interface IRoute{
  title: string
  shortDesc: string
  fullDesc: string
  markers: IMarker[]
  length: number
  favourite: boolean
}

export interface IRouteWithId extends IRoute {
  id: string
}
