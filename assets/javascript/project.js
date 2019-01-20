<<<<<<< HEAD
let bandsInTownKey = 'codingbootcamp'



$("#").on("click", function () {

    let artist = $("#").val().trim();
    let bandsInTownQueryURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=${bandsInTownKey}&date=${upcoming_events}`

    $.ajax({ url: bandsInTownQueryURL, method: "get" }).then(function(bIT_EventResponse) {
        bIT_EventResponse;
        $("#").append(
            /* there isn't that much data on their website it really is pretty limited, 
                I think the best that can be done with it is organizing into general artist info
                sort of block styled~ but I am unsure need input */
        )
    })

});

function artistInfo() {
    bandsInTownQueryURL = `https://rest.bandsintown.com/artists/${artist}?app_id=codingbootcamp`

    $.ajax ({url: bandsInTownQueryURL, method: "get"}).then(function(bIT_ArtistResponse) {
        let {name, thumb_url, tracker_count, upcoming_event_count, url} = bIT_ArtistResponse
        
    })
}
=======
 
 let lastFmURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=metallica&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json"

 //ajax call to api 
 $.ajax({
    url: lastFmURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
  }); 
>>>>>>> 52caf64ab6cb8823f089faa29df980a2a242c940
