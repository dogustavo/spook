import { Types } from '../constants/index';

const initialState = {
    token: null,
    isAuth: false,
    success: false,
    loading: false,
    error: '',
}

const userReducers = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case Types.SIGNUP:
            return {
                ...state,
                success: false,
                loading: true, 
                error: ''
            };
        case Types.SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                error: ''
            };
        case Types.LOADING:
            return {
                ...state,
                success: false,
                loading: payload,
                error: ''
            };
        case Types.ERROR:
            return {
                ...state,
                success: false,
                loading: false,
                error: payload
            };
        case Types.SET_TOKEN:
            return {
                ...state,
                token: payload.token,
                isAuth: payload.isAuth
            };
        default:
            return state
    }

}

export { userReducers }