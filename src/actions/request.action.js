import GiphyService from '../services/giphy.service';
import * as searchAction from './search.action';

const giphyService = new GiphyService();

export function fetchGifs(searchTerm, offset) {
  return (dispatch) => {
    dispatch(searchAction.setLoading(true));
    let promise;
    if (searchTerm === '') {
      promise = giphyService.fetchTrendingGifs(offset);
    } else {
      promise = giphyService.fetchGifsByTerm(searchTerm, offset);
    }
    promise.then((data) => {
      dispatch(searchAction.offsetInc(30));
      dispatch(searchAction.updateGifs(data));
    });
  };
}
