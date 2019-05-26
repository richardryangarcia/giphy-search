import {all, takeEvery, put, call} from 'redux-saga/effects';
import {SET_STATE, UPDATE_TAGS, GET_TAGS, CLEAR_TAGS} from './actions';
import {updateTags as updateTagsRequest, getTags as getTagsRequest} from '../../services/tags';

export function* updateTags({payload}){
  const {gifId, tags} = payload;
  yield put({
    type: SET_STATE,
    payload: {
      loading: true
    }
  })

  const response = yield call(updateTagsRequest, gifId, tags);
  if (response) {
    yield put({
      type: SET_STATE,
      payload: {
        loading: false
      }
    })
  }

  yield put({ type: GET_TAGS })
}

export function* getTags(){
  yield put({
    type: SET_STATE,
    payload: {
      loading: true
    }
  })
  const response = yield call(getTagsRequest);
  if (response) {
    let gifs = {};
    response.tags.forEach((t) => {
      gifs[t.gifId] = t.tags
    })

    yield put({
      type: SET_STATE,
      payload: {
        loading: false,
        gifs
      }
    })
  }
}

export function* clearTags(){
  yield put({
    type: SET_STATE,
    payload: {
      loading: false,
      gifs: []
    }
  })
}

export default function* rootSaga(){
  yield all([
    takeEvery(UPDATE_TAGS, updateTags ),
    takeEvery(GET_TAGS, getTags),
    takeEvery(CLEAR_TAGS, clearTags)
  ])
}
