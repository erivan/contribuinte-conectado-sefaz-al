const INITIAL_STATE = {
    services: [],
    userDetail: {}
}

export default (state = INITIAL_STATE.services, action) => {
    switch (action.type) {
        case 'FETCH_SERVICES':
            return { services: action.payload }
        case 'USER_INFORMATION':
            return { userDetail: action.payload };
        default:
            return state
    }
}
