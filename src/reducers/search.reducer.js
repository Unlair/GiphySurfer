import {
  SET_SEARCH_TERM,
  SET_LOADING,
  UPDATE_GIFS,
  OFFSET_INC,
  SET_RECENT_SEARCH,
} from '../constants/search.constant';
import { loadRecentTerms } from '../services/localStorage';

const initialState = {
  searchTerm: '',
  offset: 0,
  data: [],
  recentTerms: loadRecentTerms(),
  isLoading: false,
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
        data: [],
        offset: 0,
      };

    case SET_RECENT_SEARCH:
      state.recentTerms.forEach((item, index) => {
        if (state.recentTerms[index] === action.payload) {
          state.recentTerms.splice(index, 1);
        }
      });

      if (state.recentTerms.length > 9) {
        state.recentTerms.pop();
      }

      return {
        ...state,
        recentTerms: [action.payload].concat(state.recentTerms),
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case UPDATE_GIFS:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };

    case OFFSET_INC:
      return {
        ...state,
        offset: state.offset + action.payload,
      };

    default:
      return state;
  }
}
