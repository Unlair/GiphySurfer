export default class GiphyService {
    request(searchValue, offset) {
        return new Promise((resolve) => {
            fetch('http://api.giphy.com/v1/gifs/search?q=' + searchValue + '&api_key=wZ7TY2vuJXe9lk8ngjHNI2dkpwAssmEU&limit=30&offset=' + offset)
                .then(
                    (response) => {
                        response.json().then((data) => {
                            let gifList = data.data.map((pic) => {
                                return {
                                    id: pic.id,
                                    preview: pic.images.preview_gif.url,
                                    original: pic.images.original.url,
                                    rating: pic.rating,
                                    date: pic.import_datetime,
                                    widthOriginal: pic.images.original.width,
                                    heightOriginal: pic.images.original.height,
                                    widthPreview: pic.images.preview_gif.width,
                                    heightPreview: pic.images.preview_gif.height
                                }
                            });
                            return resolve(gifList);
                        });
                    }
                )
                .catch((err) => {
                    console.log('Fetch Error :-S', err);
                });
        })
    }
}
