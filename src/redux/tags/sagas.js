import {all, takeEvery, put, call} from 'redux-saga/effects';
import {SET_STATE, UPDATE_TAGS, GET_TAGS} from './actions';
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
    let s = [];
    response.tags.forEach((t) => {
      s[t.gifId] = t.tags
    })

    console.log(s);
    yield put({
      type: SET_STATE,
      payload: {
        loading: false,
        gifs: s
      }
    })
  }
}

export default function* rootSaga(){
  yield all([
    takeEvery(UPDATE_TAGS, updateTags ),
    takeEvery(GET_TAGS, getTags)
  ])
}
