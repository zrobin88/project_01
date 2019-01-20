let lastFmURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=metallica&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json"

//ajax call to api 
$.ajax({
 url: lastFmURL,
 method: "GET"
}).then(function (response) {
 console.log(response)
}); 