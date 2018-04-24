import {
  SET_SEARCH_TERM,
  SET_LOADING,
  UPDATE_GIFS,
  OFFSET_INC,
  SET_RECENT_SEARCH,
} from '../constants/search.constant';

const initialState = {
  searchTerm: '',
  offset: 0,
  data: [],
  recentTerms: ['cat', 'car', 'privet'],
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
      return {
        ...state,
        recentTerms: state.recentTerms.concat(action.payload),
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
