import { SHOW_PEOPLE } from '../types/types'

export const showPeople = (data) => dispatch => {
  return {
    type: SHOW_PEOPLE,
    payload:{
      data
    }
  };

};