import {SET_STATE} from './actions';

const initialState = {
  loading: false,
  gifs: []
}

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default tagsReducer;
