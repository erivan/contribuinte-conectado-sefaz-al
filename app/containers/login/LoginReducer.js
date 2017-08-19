const INITIAL_STATE = {
     request: { authorization: null } ,
     authorize: { authorized: null }

}

export default (state = INITIAL_STATE.request, action) => {
    switch (action.type) {
        case 'REQUEST_AUTHORIZATION':
            return { authorization: action.payload }
        case 'AUTHORIZATION':
            return { authorized: action.payload }
        case 'NOT_AUTHORIZED':
            return { notAuthorized: 'Você deve Autorizar o  app' }    
        default:
            return state
    }
}
