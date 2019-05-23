import {all, takeEvery, put, call} from 'redux-saga/effects';
import {SET_STATE, GET_FAVORITES, UPDATE_FAVORITES} from './actions';
import {searchGifs, getFavoriteGifs, updateFavoritesGifs} from '../../services/giphy';

export function* getFavorites(){
  yield put({
    type: SET_STATE,
    payload: {
      loading: true
    }
  })

  const response = yield call(getFavoriteGifs);
  let gifIds, gifs = []
  if (response) {
    gifIds = response.favorites;
    gifs = response.gifs && response.gifs.data;
  }

  yield put({
    type: SET_STATE,
    payload: {
      loading: false,
      gifIds,
      gifs
    }
  })
}

export function* updateFavorites({payload}){
  const {gif_id} = payload;
  const response = yield call(updateFavoritesGifs,gif_id);
  if (response) {
    yield put({
      type: SET_STATE,
      payload: {
        gifIds: response.favorites
      }
    })
  }

  yield put({
    type: GET_FAVORITES
  })
}

export default function* rootSaga(){
  yield all([
    takeEvery(GET_FAVORITES, getFavorites ),
    takeEvery(UPDATE_FAVORITES, updateFavorites)
  ])
}
