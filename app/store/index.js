import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import SelectServiceReducer from '../containers/selectservice/SelectServiceReducer';
import LoginReducer from '../containers/login/LoginReducer';
import TermReducer from '../containers/terms/TermReducer';
import nav from './nav';

const reducers = combineReducers({
    selectServiceScreen: SelectServiceReducer,
    loginScreen: LoginReducer,
    termScreen: TermReducer,
    nav
});

export default createStore(reducers, {}, applyMiddleware(thunk));
