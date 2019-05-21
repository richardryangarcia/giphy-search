import {SET_STATE} from './actions';

const initialState = {
  loading: false,
  searchOverlayOpen: false,
  searchErrors: null,
  keyword: '',
  gifs: []
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default searchReducer;
