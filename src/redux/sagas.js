import {all} from 'redux-saga/effects';
import userSagas from './user/sagas';
import trendingSagas from './trending/sagas';
import applicationSagas from './application/sagas';


export default function* rootSaga(){
  yield all([userSagas(), trendingSagas(), applicationSagas()])
}
