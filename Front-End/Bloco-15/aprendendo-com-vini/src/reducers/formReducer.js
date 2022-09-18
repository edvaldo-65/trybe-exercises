import { NAME_SAVED } from '../actions';

const INITAL_STATE = {
  name: '',
  email: '',
  area: '',
  profileIsSaved: false,
}

function formReducer(state = INITAL_STATE, action) {
  switch(action.type) {
    case NAME_SAVED:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        area: action.payload.area,
        profileIsSaved: action.payload.profileIsSaved
      };
    default:
      return state;
  }
}

export default formReducer;

