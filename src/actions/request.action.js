import GiphyService from '../services/giphy.service';
import * as searchAction from './search.action';

const giphyService = new GiphyService();

export function fetchGifs(searchTerm, offset) {
  return (dispatch) => {
    if (searchTerm === '') {
      giphyService.fetchTrendingGifs(offset)
        .then((data) => {
          dispatch(searchAction.updateGifs(data));
        });
    } else {
      giphyService.fetchGifsByTerm(searchTerm, offset)
        .then((data) => {
          dispatch(searchAction.updateGifs(data));
        });
    }
  };
}
