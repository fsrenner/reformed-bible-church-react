import { combineReducers } from 'redux';
import { auth } from './reducers/authReducer';
import { states } from './reducers/statesReducer';
import { modal } from './reducers/modalReducer';

export default combineReducers({ auth, states, modal });