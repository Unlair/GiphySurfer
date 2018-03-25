export default class SearchService {

    search(searchValue) {

        return new Promise((resolve) => {
            fetch('http://api.giphy.com/v1/gifs/search?q=' + searchValue + '&api_key=wZ7TY2vuJXe9lk8ngjHNI2dkpwAssmEU&limit=90')
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
                                    width: pic.images.original.width,
                                    height: pic.images.original.height
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