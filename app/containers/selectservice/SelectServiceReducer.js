const INITIAL_STATE = {
    services: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_SERVICES':
            return { services: action.payload }
        default:
            return state
    }
}
