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
 
const spotifyURL = 'https://api.spotify.com/api/token/';
let accessToken = 'Authorization: Bearer BQCgFdGZSXiAupHps_-lmn-aWJS3pLyldeP45lNJUQwTt_P9MukZMVDbh-p5YyZIgoIlnUE9bcuKep3rYcwkKusYBIluV_k4RaT-Byi9dm2WsHreH3oHsJVwxN_2lpyypUrBZpVEuouka842J7hTmVNImnggj-w'; 

let searchArtist = (artistName) =>{
  $.ajax({
    url: spotifyURL + accessToken,
    method : "GET",
    dataType: "json",
    data: {
      q: artistName,
      type: "artist"
    }
  }).then(function (response) {
    console.log(response); 
  });
};
 

// click event for submit button  
$("#artist-submit").on("click", function(){
 event.preventDefault(); 
 // variable for user input 
let userInput = $("#artist-input").val();
// last.fm top tracks 
 let topTracksURL = "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+userInput+"&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json"
 console.log(topTracksURL);
// last.fm artist info 
 let infoURL = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+userInput+"&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json"

 //ajax call to last.fm api 
 function getToptracks(){
  $.ajax({
    url: topTracksURL,
    method: "GET"
  }).then(function (response) {
<<<<<<< HEAD
    console.log(response)
  }); 
>>>>>>> 52caf64ab6cb8823f089faa29df980a2a242c940
=======
    //loop through top 50 tracks to get top 10 
    for (let i = 0; i < 10; i++) {
    let topTracks = response.toptracks.track[i].name
    
    console.log(topTracks);
        //append to top tracks div 
        $("#top-tracks").append(topTracks);

    }

  });  
 }; 
 // function for obtaining artist info from
 function getArtistInfo(){

  $.ajax({
    url: infoURL,
    method: "GET"
  }).then(function (response) {
    $("#artist-info").empty();
    $("#band-name").empty();
    $("#top-tracks").empty();
    console.log(response.artist.bio);
    let artistInfo = response.artist.bio.summary;
    $("#artist-info").append(artistInfo); 
    $("#band-name").text(response.artist.name);
  })

  
 };


 getArtistInfo();
 getToptracks(); 
 searchArtist();

});
>>>>>>> 92b7d284479bda2328e3ede0a4d8d75a495dd8a1
