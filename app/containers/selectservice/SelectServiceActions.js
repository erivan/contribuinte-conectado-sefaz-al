import { getServices } from '../../domain/local/servicesdatasource/services'

const fetchServices = (services) => {
    return {
        type: 'FETCH_SERVICES',
        payload: services,
    }
}

export const loadServices = ({ companyGuid }) => {
    return (dispatch) => {
        getServices(companyGuid)
            .then((response) => {
                dispatch(fetchServices(response))
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
