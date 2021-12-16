import {
  SET_SUCCESS_MODAL_SHOW,
  SET_SUCCESS_MODAL_MESSAGE,
  SET_CONFIRM_MODAL_SHOW,
  SET_CONFIRM_MODAL_MESSAGE,
  SET_CONFIRM_MODAL_DECISION
} from '../types';

const initialState = {
  successShow: false,
  confirmShow: false,
  successMessage: '',
  confirmMessage: '',
  confirmDecision: ''
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUCCESS_MODAL_SHOW: return {
      ...state,
      successShow: action.payload.successShow
    };
    case SET_CONFIRM_MODAL_SHOW: return {
      ...state,
      confirmShow: action.payload.confirmShow
    };
    case SET_SUCCESS_MODAL_MESSAGE: return {
      ...state,
      successMessage: action.payload.successMessage
    };
    case SET_CONFIRM_MODAL_MESSAGE: return {
      ...state,
      confirmMessage: action.payload.confirmMessage
    };
    case SET_CONFIRM_MODAL_DECISION: return {
      ...state,
      confirmDecision: action.payload.confirmDecision
    };
    default: return state;
  }
}