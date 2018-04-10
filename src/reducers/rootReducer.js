import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import contentReducer from './contentReducer';

export default combineReducers({
  searchReducer,
  contentReducer,
});

