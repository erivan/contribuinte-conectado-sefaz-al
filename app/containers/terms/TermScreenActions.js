import { loadTerms, mockTerms } from '../../domain/remote/termsdatasource/comunications'

const fetchTerms = (terms) => {
    return {
        type: 'FETCH_TERMS',
        payload: terms,
    };
};

export const fetchTermsAction = (identifier) => {
    return (dispatch) => {

        mockTerms(identifier)
            .then((response) => {
                dispatch(fetchTerms(response))
            })
            .catch((error) => {
               console.log(error)
            })
            .then(() => {

            })
    };
}
