import {
  SET_SEARCH_TERM,
  UPDATE_GIFS,
  OFFSET_INC,
} from '../constants/searchConst';

export function setTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
}

export function dataGifsUpdate(data) {
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
