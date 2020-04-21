import AsyncStorage from '@react-native-community/async-storage';

import { setHeaderToken } from '../utils/http';

/**
 *
 * Actions Types
 *
 */

export const Types = {
    SIGIN: 'auth/SIGIN',
    SIGUP: 'auth/SIGUP',
    LOGOUT: 'auth/LOGOUT',
    SET_TOKEN: 'auth/SET_TOKEN',

    SUCCESS: 'auth/SUCCESS',
    LOADING: 'auth/LOADING',
    ERROR: 'auth/ERROR'
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
        case Types.SIGUP:
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
                success: payload || true,
                loading: payload,
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
            }
        case Types.SET_TOKEN:
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

export const authSigin  = payload => { return { type: Types.SIGIN, payload } }
export const authSigup = payload => { return { type: Types.SIGUP, payload } }
export const logout = payload => { return { type: Types.LOGOUT, payload } }