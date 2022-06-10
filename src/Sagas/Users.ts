import {call} from 'redux-saga/effects'
import { getStudent } from '../Apis/Users'

export function* getStudentSaga ():Generator{
   const data= yield call(getStudent)
   console.log('data from api', data)
}