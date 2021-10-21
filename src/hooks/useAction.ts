import { bindActionCreators } from "redux"
import { useDispatch } from 'react-redux'
import routesActionCreators from "../store/reducers/routes/action-creators"


const useAction = () => {
    const dispatch = useDispatch()
    
    return bindActionCreators({
        ...routesActionCreators
    }, dispatch)
}

export default useAction