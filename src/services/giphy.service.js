import {
  GIPHY_API_HOST,
  PATH_SEARCH,
  PATH_TREND,
  API_KEY,
} from '../constants/request.constant';

export default class GiphyService {
  fetchTrendingGifs(offset) {
    const requestBody = {
      offset,
    };

    return this.buildRequest(PATH_TREND, requestBody);
  }

  fetchGifsByTerm(searchTerm, offset) {
    const requestBody = {
      q: searchTerm,
      offset,
    };

    return this.buildRequest(PATH_SEARCH, requestBody);
  }

  buildRequest(path, body) {
    const buildRequestUrl = (body) => {
      const requestUrl = [];

      for (const param in body) {
        if (body.hasOwnProperty(param)) {
          requestUrl.push(`${encodeURIComponent(param)}=${encodeURIComponent(body[param])}`);
        }
      }
      return requestUrl.join('&');
    };

    const baseUrl = GIPHY_API_HOST + path;

    const queryParams = buildRequestUrl(body);

    return new Promise((resolve) => {
      fetch(baseUrl + queryParams + API_KEY)
        .then((response) => {
          response.json().then((data) => {
            const gifList = data.data.map(pic => ({
              id: pic.id,
              preview: pic.images.preview_gif.url,
              original: pic.images.original.url,
              rating: pic.rating,
              date: pic.import_datetime,
              widthOriginal: pic.images.original.width,
              heightOriginal: pic.images.original.height,
              widthPreview: pic.images.preview_gif.width,
              heightPreview: pic.images.preview_gif.height,
            }));
            return resolve(gifList);
          });
        })
        .catch((err) => {
          console.log('Fetch Error :-S', err);
        });
    });
  }
}
