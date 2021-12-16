import {
  LOGIN,
  LOGOUT,
  SET_SUBMITTED,
  SET_LOADING,
  SET_ERROR,
  SET_TAB,
  SET_SUCCESS_MODAL_SHOW,
  SET_SUCCESS_MODAL_MESSAGE,
  SET_CONFIRM_MODAL_SHOW,
  SET_CONFIRM_MODAL_MESSAGE,
  SET_CONFIRM_MODAL_DECISION
} from "./types";

export const login = (user) => ({ 
  type: LOGIN, payload: { 
    user
  }
});

export const logout = () => ({
  type: LOGOUT,
  payload: {
    user: {}
  }
});

export const setSubmitted = (submitted) => ({
  type: SET_SUBMITTED,
  payload: {
    submitted
  }
});
export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: {
    loading
  }
});
export const setError = (error) => ({
  type: SET_ERROR,
  payload: {
    error
  }
});
export const setTab = (tab) => ({ 
  type: SET_TAB,
  payload: tab
});

export const setSuccessModalShow = (successShow) => ({ 
  type: SET_SUCCESS_MODAL_SHOW,
  payload: {
    successShow
  }
});

export const setSuccessModalMessage = (successMessage) => ({ 
  type: SET_SUCCESS_MODAL_MESSAGE,
  payload: {
    successMessage
  }
});

export const setConfirmModalShow = (confirmShow) => ({ 
  type: SET_CONFIRM_MODAL_SHOW,
  payload: {
    confirmShow
  }
});

export const setConfirmModalMessage = (confirmMessage) => ({ 
  type: SET_CONFIRM_MODAL_MESSAGE,
  payload: {
    confirmMessage
  }
});

export const setConfirmModalDecision = (confirmDecision) => ({ 
  type: SET_CONFIRM_MODAL_DECISION,
  payload: {
    confirmDecision
  }
});