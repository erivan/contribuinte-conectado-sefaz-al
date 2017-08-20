const INITIAL_STATE = {
    terms: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_TERMS':
        return Object.assign({}, state, {
               terms: [action.payload]
           });
        default:
            return state;
    }
};
