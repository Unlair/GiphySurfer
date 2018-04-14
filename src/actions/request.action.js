import GiphyService from '../services/giphy.service';
import * as searchAction from './search.action';

const giphyService = new GiphyService();

export function fetchGifs(searchTerm, offset) {
  return (dispatch) => {
    dispatch(searchAction.setLoading(true));

    if (searchTerm === '') {
      giphyService.fetchTrendingGifs(offset)
        .then((data) => {
          dispatch(searchAction.updateGifs(data));
        })
        .then(() => {
          dispatch(searchAction.setLoading(false));
        });
    } else {
      giphyService.fetchGifsByTerm(searchTerm, offset)
        .then((data) => {
          dispatch(searchAction.updateGifs(data));
        })
        .then(() => {
          dispatch(searchAction.setLoading(false));
        });
    }
  };
}
