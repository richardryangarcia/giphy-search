export const SET_STATE='@@favorites/SET_STATE';
export const GET_FAVORITES='@@favorites/GET_FAVORITES';
export const UPDATE_FAVORITES='@@favorites/UPDATE_FAVORITES';
export const CLEAR_FAVORITES='@@favorites/CLEAR_FAVORITES';

export const updateFavorites = (gif_id) => {
  return {
    type: UPDATE_FAVORITES,
    payload: {
      gif_id
    }
  }
}

export const clearFavorites = () => {
  return {
    type:CLEAR_FAVORITES
  }
}
