import { put, call } from 'redux-saga/effects';

import { setHeaderToken } from '../utils/http';

import { authSigin, authSigup } from '../ducks/auth';


export function* sigin({ payload }) {
    try {
        yield put(authLogout());
    } catch (error) {
        console.log(error);
        
    }
}

export function* authCheck() {
    try {
        //criar função para pegar token
        // adicionar o token exemplo:
            // if ( token ) {
            // 	setHeaderToken( token );
            // 	yield put(authLogin(token));
            // 	return;
            // }
        
    } catch (error) {
        // Crira erro de autenticação
    }
}