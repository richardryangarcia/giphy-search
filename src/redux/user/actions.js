export const SET_STATE='@@user/SET_STATE';
export const LOGIN='@@user/LOGIN';
export const CLEAR_ERRORS='@@user/CLEAR_ERRORS';
export const LOGOUT='@@user/LOGOUT';
export const REGISTER='@@user/REGISTER';
export const LOAD_CURRENT_USER='@@user/LOAD_CURRENT_USER';

//Action Creators
export const logout = () => {
  return {type: LOGOUT}
}

export const clearErrors = () => {
  return {type: CLEAR_ERRORS}
}
