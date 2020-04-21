import AsyncStorage from '@react-native-community/async-storage';

import { setHeaderToken } from '../utils/http';

/**
 *
 * Actions Types
 *
 */

export const Types = {
    LOGIN: 'auth_sagas/SIGIN',
    LOGOUT: 'auth_sagas/LOGOUT',
    AUTH_CHECK: 'auth/AUTH_CHECK'
}

const initialState = {
    token: null,
    isAuth: null,
}

export default function reducer(state = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch(type) {
        case Types.LOGIN:
            return {
                ...state,
                token: payload,
                isAuth: true
            };
        case Types.LOGOUT:
            return {
                ...state,
                token: null,
                isAuth: false
            };
        default:
            return state
    }
}

/**
 *
 * Actions Creators
 *
 */

export const authLogin  = payload => { return { type: Types.LOGIN, payload: token } }
export const authLogout = payload => { return { type: Types.LOGOUT } }
export const checkout  = payload => { return { type: Types.AUTH_CHECK } }