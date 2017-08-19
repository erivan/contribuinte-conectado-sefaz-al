import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import SelectServiceReducer from '../containers/selectservice/SelectServiceReducer'
import LoginReducer from '../containers/login/LoginReducer'

const reducers = combineReducers({
    selectServiceScreen: SelectServiceReducer,
    loginScreen: LoginReducer,
})

export default createStore(reducers, {}, applyMiddleware(thunk))
