import { SET_SUBMITTED, SET_LOADING, SET_ERROR, SET_TAB } from '../types';


const initialState = {
  loading: false,
  showError: false,
  error: '',
  submitted: false,
  tab: 'people'
};

export const states = (state = initialState, action) => {
  switch(action.type) {
    case SET_SUBMITTED: return {
      ...state,
      submitted: action.payload.submitted
    };
    case SET_LOADING: return {
      ...state,
      loading: action.payload.loading
    };
    case SET_ERROR: return {
      ...state,
      error: action.payload.error.error,
      showError: action.payload.error.showError
    };
    case SET_TAB: return {
      ...state,
      tab: action.payload.tab
    };
    default: return state;
  }
}