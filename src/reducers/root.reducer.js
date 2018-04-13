import { combineReducers } from 'redux';
import searchReducer from './search.reducer';
import contentReducer from './content.reducer';

export default combineReducers({
  searchReducer,
  contentReducer,
});

