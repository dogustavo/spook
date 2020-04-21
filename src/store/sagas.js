import { takeLatest } from 'redux-saga/effects';

import { logout, authCheck } from '../sagas/auth';

import { Types as authTypes } from '../ducks/auth';

export default function* rootSaga() {
    yield takeLatest(authTypes.LOGOUT, logout);
    yield takeLatest(authTypes.AUTH_CHECK, authCheck);
}