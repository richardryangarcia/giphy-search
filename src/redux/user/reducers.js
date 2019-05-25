import {SET_STATE} from './actions';

const initialState = {
  id: '',
  name: '',
  email: '',
  authorized: false,
  loading: false,
  loginSubmitErrors: null,
  registerSubmitErrors: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default userReducer;
