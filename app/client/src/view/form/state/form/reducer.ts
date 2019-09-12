import * as actionTypes from './actionTypes';

interface State {
    data: any;
    isFetching: boolean;
    error: boolean;
    errorMessage: string;
}

const initialState: State = {
    data: [],
    isFetching: false,
    error: false,
    errorMessage: ''
};

export const form = (state: State = initialState, action): State => {
    switch(action.type) {
        case actionTypes.FETCH_DATA_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data,
                error: false
            }
        case actionTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.msg
            }
        case actionTypes.SAVE_FORM_DATA_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.SAVE_FORM_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.msg
            }
        default: 
            return state;
    }
}