export default class SearchService {

    search(searchValue, offset) {

        return new Promise((resolve) => {
            // let offset = 0;
            fetch('http://api.giphy.com/v1/gifs/search?q=' + searchValue + '&api_key=wZ7TY2vuJXe9lk8ngjHNI2dkpwAssmEU&limit=30&offset=' + offset)
                .then(
                    function (response) {
                        response.json().then(function (data) {
                            let gifList = data.data.map(function (pic) {
                                return {
                                    id: pic.id,
                                    thumbnail: pic.images.downsized.url,
                                    full: pic.images.original.url,
                                    rating: pic.rating,
                                    date: pic.import_datetime,
                                    widthFull: pic.images.original.width,
                                    heightFull: pic.images.original.height,
                                    widthThumbnail: pic.images.downsized.width,
                                    heightThumbnail: pic.images.downsized.height
                                }
                            });
                            return resolve(gifList);
                        });
                    }
                )
                .catch(function (err) {
                    console.log('Fetch Error :-S', err);
                });
        })
    }
}