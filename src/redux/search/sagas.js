import {all, takeEvery, put, call} from 'redux-saga/effects';
import { push } from 'react-router-redux'
import {SET_STATE, SUBMIT_SEARCH, OPEN_SEARCH, CLOSE_SEARCH} from './actions';
import {searchGifs} from '../../services/giphy';
import toaster from 'toasted-notes';


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

  const response = yield call(searchGifs, {q: keyword} );
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
  } else {
    toaster.notify(`Zero results for keyword ${keyword}`, {
      duration: 5000
    });
  }

  yield put({
    type: CLOSE_SEARCH
  });
}



export default function* rootSaga(){
  yield all([
    takeEvery(OPEN_SEARCH, openSearch ),
    takeEvery(CLOSE_SEARCH, closeSearch ),
    takeEvery(SUBMIT_SEARCH, submitSearch)
  ])
}
