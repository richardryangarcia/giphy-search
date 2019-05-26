export const SET_STATE='@@tags/SET_STATE';
export const UPDATE_TAGS='@@tags/UPDATE_TAGS';
export const GET_TAGS='@@tags/GET_TAGS';
export const CLEAR_TAGS='@@tags/CLEAR_TAGS';

export const updateTags = (tags, gifId) => {
  return {
    type: UPDATE_TAGS,
    payload: {
      gifId,
      tags
    }
  }
}

export const getTags = () => {
  return {
    type: GET_TAGS
  }
}
