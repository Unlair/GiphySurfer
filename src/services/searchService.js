export default class SearchService {

    search(searchValue, limit) {

        return new Promise((resolve) => {
            fetch('http://api.giphy.com/v1/gifs/search?q=' + searchValue + '&api_key=wZ7TY2vuJXe9lk8ngjHNI2dkpwAssmEU&limit=' + limit)
                .then(
                    function (response) {
                        response.json().then(function (data) {
                            console.log(data);
                            let gifList = data.data.map(function (pic) {
                                return {id: pic.id, url: pic.images.downsized.url}
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