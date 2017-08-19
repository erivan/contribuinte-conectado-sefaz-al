import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import SelectServiceReducer from '../containers/selectservice/SelectServiceReducer'
import AppNavigator from '../navigators/AppNavigator'

const firstAction = AppNavigator.router.getActionForPathAndParams('SelectService');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Chat');
const initialNavState = AppNavigator.router.getStateForAction(
    secondAction,
    tempNavState
);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case 'Logout':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

const reducers = combineReducers({
    selectServiceScreen: SelectServiceReducer,
})

export default createStore(reducers, {}, applyMiddleware(thunk))
