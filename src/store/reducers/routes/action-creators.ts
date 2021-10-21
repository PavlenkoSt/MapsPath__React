import RouteType from "../../../models/route"
import { RoutesActionTypes } from "./types"

const routesActionCreators = {
    addRoute: (payload: RouteType) => ({ type: RoutesActionTypes.ADD_ROUTE, payload })
}

export default routesActionCreators