import AsyncStorage from '@react-native-community/async-storage';

import { setHeaderToken } from '../utils/http';

/**
 *
 * Actions Types
 *
 */

export const Types = {
    SIGIN: 'auth_sagas/SIGIN',
    SIGNUP: 'auth_sagas/SIGNUP',
    LOGOUT: 'auth_sagas/LOGOUT',

    AUTH_SET_TOKEN: 'auth_sagas/AUTH_SET_TOKEN',

    SUCCESS: 'auth_sagas/SUCCESS',
    LOADING: 'auth_sagas/LOADING',
    ERROR: 'auth_sagas/ERROR',
}

const initialState = {
    token: null,
    isAuth: false,
    success: false,
    loading: false,
    error: '' 
}

export default function reducer(state = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch(type) {
        case Types.SIGIN:
            return {
                ...state,
                success: false,
                loading: true,
                error: ''
            };
        case Types.SIGNUP:
            return {
                ...state,
                success: false,
                loading: true,
                error: ''
            };
        case Types.LOGOUT:
            return {
                ...state,
                success: false,
                loading: true,
                error: ''
            };
        case Types.SUCCESS:
            return {
                ...state,
                success: payload.message || true,
                loading: false,
                error: ''
            };
        case Types.LOADING:
            return {
                ...state,
                success: false,
                loading: payload,
                error: ''
            }
        case Types.ERROR:
            return {
                ...state,
                success: false,
                loading: false,
                error: payload
            };
        case Types.AUTH_SET_TOKEN:
            return {
                ...state,
                token: payload.token,
                isAuth: payload.isAuth
            }
        default:
            return state
    }
}

/**
 *
 * Actions Creators
 *
 */

export const sigin  = payload => { return { type: Types.SIGIN, payload } }
export const sigup  = payload => { return { type: Types.SIGNUP, payload } }
export const logout = payload => { return { type: Types.LOGOUT, payload } }