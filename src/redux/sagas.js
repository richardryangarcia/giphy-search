import {all} from 'redux-saga/effects';
import userSagas from './user/sagas';
import trendingSagas from './trending/sagas';


export default function* rootSaga(){
  yield all([userSagas(), trendingSagas()])
}
