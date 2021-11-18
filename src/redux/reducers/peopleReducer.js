import { SHOW_PEOPLE, ADD_PERSON, UPDATE_Person } from '../types/types';

const initialState = {
  id: 1,
  firstname: "Steve",
  lastname: "Renner",
  email: "f.steve.renner@gmail.com",
  phonenumber: "4179731225",
  address: {
    id: 1,
    street: "256 Old Still Rd",
    city: "Kimberling City",
    county: "Stone",
    state : "MO",
    zip: 65686
  },
  member: true,
  parent: true,
  married: true,
  household: "Renner"
};

export const peopleReducer = ( state=[initialState], action ) =>{

  switch(action.type) {

    case SHOW_PEOPLE : return [
      ...action.payload.data
    ];
    
    default: return state;

  }

}