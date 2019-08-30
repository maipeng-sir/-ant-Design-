import {createStore,combineReducers,applyMiddleware} from "redux"
import home from "./reducers/home"
import user from "./reducers/user"
import reduxThunk from "redux-thunk"
const reducer = combineReducers({
    home,
    user
})

export default createStore(reducer,applyMiddleware(reduxThunk))
