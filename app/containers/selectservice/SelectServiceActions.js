
import { getServices, fetchUserInformation } from '../../domain/local/servicesdatasource/services';

const fetchServices = (services) => {
    return {
        type: 'FETCH_SERVICES',
        payload: services,
    }
}

 const loadServices = ({ companyGuid }) => {
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
const userInformationAction = (response) => {
    return {
        type: 'USER_INFORMATION',
        payload: response,
    };
};
const getUserInformaion = () => (
  (dispatch) => {

    fetchUserInformation()
    .then((response) => {
       dispatch(userInformationAction(response));
    })
    .catch((error) => {
      console.log(error)

      dispatch({ type: 'NOT_AUTHORIZED', payload: error });
    });
  }
);

export { getUserInformaion, loadServices };
