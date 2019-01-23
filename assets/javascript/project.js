
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

   

  for (let i = 0; i < 5; i++) {
    console.log(response[i]);
  }

});
});
