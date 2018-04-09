import {combineReducers} from 'redux';
import search from './search';
import content from './content';

export default combineReducers({
    search,
    content
});
