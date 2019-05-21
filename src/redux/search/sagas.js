import {all, takeEvery, put, call} from 'redux-saga/effects';
import { push } from 'react-router-redux'
import {SET_STATE, SUBMIT_SEARCH, SET_SEARCH_ERROR, OPEN_SEARCH, CLOSE_SEARCH} from './actions';
import {searchGifs} from '../../services/giphy';

export function* openSearch(){
  yield put({
    type: SET_STATE,
    payload: {
      searchOverlayOpen: true
    }
  })
}

export function* closeSearch(){
  yield put({
    type: SET_STATE,
    payload: {
      searchOverlayOpen: false
    }
  })
}

export function* submitSearch({payload}){
  const {keyword} = payload;
  yield put({
    type: SET_STATE,
    payload: {
      loading: true
    }
  })

  const response = yield call(searchGifs, keyword );
  const gifs = response && response.data ? response.data : [];

  yield put({
    type: SET_STATE,
    payload: {
      loading: false,
      keyword,
      gifs
    }
  })

  if (gifs && gifs.length > 0 ){
    yield put(push('/search-results'))
    yield put({
      type: CLOSE_SEARCH
    });
  } else {
    yield put({
      type: SET_STATE,
      payload: {
        searchErrors: "Zero results for this search."
      }
    })
  }
}



export default function* rootSaga(){
  yield all([
    takeEvery(OPEN_SEARCH, openSearch ),
    takeEvery(CLOSE_SEARCH, closeSearch ),
    takeEvery(SUBMIT_SEARCH, submitSearch)
  ])
}
