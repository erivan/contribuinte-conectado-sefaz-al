import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import SelectServiceReducer from '../containers/selectservice/SelectServiceReducer'

const reducers = combineReducers({
    selectServiceScreen: SelectServiceReducer,
})

export default createStore(reducers, {}, applyMiddleware(thunk))
