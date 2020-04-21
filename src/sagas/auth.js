import { put, call } from 'redux-saga/effects';

import { setHeaderToken } from '../utils/http';

import { authLogin, authLogout } from '../ducks/auth';


export function* logout() {
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
        
        yield put(authLogout());
    } catch (error) {
        // Crira erro de autenticação
    }
}