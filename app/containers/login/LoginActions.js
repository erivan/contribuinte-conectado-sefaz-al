import { requestAuthorization, requestAuthorize } from '../../domain/remote/logindatasource/comunications'

const requestAuthorizationAction = (response) => {
    return {
        type: 'REQUEST_AUTHORIZATION',
        payload: response,
    }
}

const requestAuthorizeAction = (response) => {
    return {
        type: 'AUTHORIZATION',
        payload: response,
    }
}
const requestAuthorizationUser = (user) => {
    return (dispatch) => {
      console.log('login')
        requestAuthorization(user)
            .then((response) => {
                dispatch(requestAuthorizationAction(response))
            })
            .catch((error) => {
                //   dispatch(loginError('An error occurred. \nCheck your internet connection'))
                // }
            })
            .then(() => {
                // dispatch(loginLoading(false))
            })
    }
}
const authorize = (request) => {
  return(dispatch) => {
    requestAuthorize(request)
    .then((response) => {
       dispatch(requestAuthorizeAction(response))
    })
    .catch((error) => {
      console.log(error.message)
      dispatch({type: 'NOT_AUTHORIZED', payload: error})
    })
  }
}
export { requestAuthorizationUser, authorize }
