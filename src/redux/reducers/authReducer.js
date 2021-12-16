import { LOGIN, LOGOUT } from '../types';


const initialState = {
  id: null,
  person: null,
  role: null,
  username: ''
}

export const auth = (state = { initialState }, action) => {
  switch(action.type) {
    case LOGIN: return {
      ...action.payload.user
    };
    case LOGOUT: return {
      ...action.payload.user
    };
    default: return state;
  }
}