import { combineReducers } from 'redux';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  profile: formReducer,
});

export default rootReducer;
