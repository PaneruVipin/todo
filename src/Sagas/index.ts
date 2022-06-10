import createSagaMiddleware from "redux-saga"
import { takeEvery } from "redux-saga/effects"
import { USERS_FETCHED } from "../TSFiles/Actions/users"
import { getStudentSaga } from "./Users"


export const sagaMiddleware = createSagaMiddleware()

export function* rootSaga(){
    yield takeEvery(USERS_FETCHED, getStudentSaga)
}