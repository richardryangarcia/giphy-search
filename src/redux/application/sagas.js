import {all, takeEvery, put} from 'redux-saga/effects';
import {SET_STATE, OPEN_MODAL, CLOSE_MODAL, SET_MODAL_TYPE} from './actions';

export function* openModal({payload}){
  const {modalType} = payload;
  yield put({
    type: SET_STATE,
    payload: {
      modalOpen: true,
      modalType
    }
  })
}

export function* closeModal(){
  yield put({
    type: SET_STATE,
    payload: {
      modalOpen: false,
      modalType: ''
    }
  })
}

export function* setModalType({payload}){
  const {modalType} = payload;
  yield put({
    type: SET_STATE,
    payload: {
      modalType
    }
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(OPEN_MODAL, openModal ),
    takeEvery(CLOSE_MODAL, closeModal ),
    takeEvery(SET_MODAL_TYPE, setModalType)
  ])
}
