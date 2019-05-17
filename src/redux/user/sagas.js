import {all, takeEvery, put, call} from 'redux-saga/effects';
import {LOGIN, REGISTER, LOGOUT, LOAD_CURRENT_USER, SET_STATE} from './actions';
import {fbRegister, fbUpdateName, fbLogin, fbLogout, fbCurrentUser} from '../../services/firebase';

export function* login({payload}){
  const {email, password} = payload;
  yield put({
    type: SET_STATE,
    payload: {
      loading: true
    }
  })

  const response = yield call(fbLogin, email, password);
  if (response) {
    yield put({
      type: LOAD_CURRENT_USER
    })
  }
}

export function* register({payload}){
  const {firstName, lastName, email, password} = payload;
  yield put({
    type: SET_STATE,
    payload: {
      loading: true
    }
  })

  const user = yield call(fbRegister, email, password);
  if (user) {
    yield call(fbUpdateName, user, firstName, lastName);
    yield call(register, firstName, lastName, email);
    yield put({
      type: LOAD_CURRENT_USER,
    });
  }
}

export function* logout(){
  yield call(fbLogout)
  window.localStorage.removeItem('hebCodeChallenge.accessToken');
  yield put({
    type: SET_STATE,
    payload: {
      id: '',
      name: '',
      email: '',
      authorized: false,
      loading: false
    }
  })
}

export function* loadCurrentUser(){
  yield put({
    type: SET_STATE,
    payload: {
      loading: true
    }
  });

  const response = yield call(fbCurrentUser);
  if (response) {
    const {uid, displayName, email} = response;
    window.localStorage.setItem('hebCodeChallenge.accessToken', response.ra)
    yield put({
      type: SET_STATE,
      payload: {
        id: uid,
        name: displayName,
        email,
        authorized: true,
        loading: false
      }
    });
  }
}

export default function* rootSaga(){
  yield all([
    takeEvery(LOGIN, login ),
    takeEvery(REGISTER, register),
    takeEvery(LOGOUT, logout),
    takeEvery(LOAD_CURRENT_USER, loadCurrentUser)
  ])
}
