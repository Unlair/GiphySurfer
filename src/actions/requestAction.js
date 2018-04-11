import GiphyService from '../services/giphyService';
import * as searchAction from './searchAction';

export function fetchRequest(searchTerm, offset) {
  const giphyService = new GiphyService();

  return (dispatch) => {
    giphyService.fetchGifs(searchTerm, offset)
      .then((data) => {
        dispatch(searchAction.dataGifsUpdate(data));
      });
  };
}
