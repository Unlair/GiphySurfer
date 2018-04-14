import {
  SET_SEARCH_TERM,
  UPDATE_GIFS,
  OFFSET_INC,
} from '../constants/search.constant';

export function setTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
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
