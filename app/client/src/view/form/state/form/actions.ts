import * as actionTypes from './actionTypes';
import { service } from './services';

const fetchDataRequest = () => ({
    type: actionTypes.FETCH_DATA_REQUEST
});

const fetchDataSuccess = (data) => ({
    type: actionTypes.FETCH_DATA_SUCCESS,
    data
});

const fetchDataFailure = (msg) => ({
    type: actionTypes.FETCH_DATA_FAILURE,
    msg
});

const saveFormDataRequest = () => ({
    type: actionTypes.SAVE_FORM_DATA_REQUEST
})

const saveFormDataFailure = (msg) => ({
    type: actionTypes.SAVE_FORM_DATA_FAILURE,
    msg
})

export const fetchData = (): Function => {
    return async dispatch => {
        dispatch(fetchDataRequest());
        try {
            const data = await service.get();
            dispatch(fetchDataSuccess(data));
        } catch(e) {
            dispatch(fetchDataFailure(e.message));
        }
    }
}

export const saveFormData = (formData): Function => {
    return async dispatch => {
        dispatch(saveFormDataRequest());
        try {
            await service.post(formData);
        } catch(e) {
            dispatch(saveFormDataFailure(e.message));
        }
    }
}