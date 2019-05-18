import {all, takeEvery, put, call} from 'redux-saga/effects';
import {SET_STATE, GET_TRENDING} from './actions';
import {getTrendingGifs} from '../../services/giphy';

export function* getTrending(){
  yield put({
    type: SET_STATE,
    payload: {
      loading: true
    }
  })

  const response = yield call(getTrendingGifs);
  if (response) {
    yield put({
      type: SET_STATE,
      payload: {
        loading: false,
        gifs: response.data
      }
    })
  }
}

export default function* rootSaga(){
  yield all([
    takeEvery(GET_TRENDING, getTrending )
  ])
}
