export const SET_STATE='@@application/SET_STATE';
export const OPEN_MODAL='@@application/OPEN_MODAL';
export const CLOSE_MODAL='@@application/CLOSE_MODAL';
export const SET_MODAL_TYPE='@@application/SET_MODAL_TYPE';
export const POP_TOAST='@@application/POP_TOAST';
export const APP_LOADING='@@application/APP_LOADING';
export const APP_NOT_LOADING='@@application/APP_NOT_LOADING';

//action creators
export const openModal = (modalType) => {
  return {
    type: OPEN_MODAL,
    payload: {
      modalType
    }
  }
}

export const popToast = (toastMessage) => {
  return {
    type: POP_TOAST,
    payload: {
      toastMessage
    }
  }
}

export const appLoading = () => {
  return {
    type: APP_LOADING
  }
}

export const appNotLoading = () => {
  return {
    type: APP_NOT_LOADING
  }
}
