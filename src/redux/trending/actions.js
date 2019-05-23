export const SET_STATE='@@trending/SET_STATE';
export const GET_TRENDING='@@trending/GET_TRENDING';

//action creators

export const getTrending = () => {
  return {type: GET_TRENDING}
}
