import {
  SET_SEARCH_TERM,
  SET_LOADING,
  UPDATE_GIFS,
  OFFSET_INC,
  SET_RECENT_SEARCH,
} from '../constants/search.constant';

export function setTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
}

export function setRecentSearch(searchTerm) {
  return {
    type: SET_RECENT_SEARCH,
    payload: searchTerm,
  };
}

export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
}

export function updateGifs(data) {
  return {
    type: UPDATE_GIFS,
    payload: data,
  };
}

export function offsetInc(offset) {
  return {
    type: OFFSET_INC,
    payload: offset,
  };
}
