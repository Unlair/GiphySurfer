import {
  SET_SEARCH_TERM,
  SET_LOADING,
  UPDATE_GIFS,
  OFFSET_INC,
  SET_RECENT_SEARCH,
} from '../constants/search.constant';

export function setTerm(searchTerm) {
  return (dispatch) => {
    dispatch({
      type: SET_SEARCH_TERM,
      payload: searchTerm,
    });

    // TODO: проверка на совпадения, удаление последнего элемента

    dispatch({
      type: SET_RECENT_SEARCH,
      payload: searchTerm,
    });
  };
}

export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
}

export function updateGifs(data) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_GIFS,
      payload: data,
    });

    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  };
}

export function offsetInc(offset) {
  return {
    type: OFFSET_INC,
    payload: offset,
  };
}
