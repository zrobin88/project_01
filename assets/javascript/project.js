
let lastFmURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=metallica&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json"

//ajax call to Last FM api 
$.ajax({
  url: lastFmURL,
  method: "GET"
}).then(function (response) {
  console.log(response)
});
//ajax call to Bands In Town api
$( "#artist-submit" ).click(function() {
  alert( "Handler for .click() called." );

let artist = $("#artist-input").val().trim();
let bandsInTownEvents = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp&date=upcoming`
let bandsInTownArtist = `https://rest.bandsintown.com/artists/${artist}?app_id=codingbootcamp`
$.ajax({
  url: bandsInTownEvents,
  method: "GET"
}).then(function (response) {
  console.log(response)
  $('#events').text(response[0].datetime);

// loop for events

let info = {
  date: "response[i].datetime",
  ticketURL: "response[i].offers[0].url",
  venueName: "response[i].venue.name",
  venueCity: "response[i].venue.city",
  venueCountry:  "response[i].venue.country"
   };

  for (let i = 0; i < 5; i++) {
    console.log([i]);
  }

});
});
