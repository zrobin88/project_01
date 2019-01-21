 
const spotifyURL = 'https://api.spotify.com/v1/';
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
 

 
$("#artist-submit").on("click", function(){
 event.preventDefault(); 
let userInput = $("#artist-input").val();

 let topTracksURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+userInput+"&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json"

 let infoURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+userInput+"&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json"

 //ajax call to last.fm api 
 function getToptracks(){
  $.ajax({
    url: topTracksURL,
    method: "GET"
  }).then(function (response) {
    //loop through top 50 tracks to get top 10 
    for (let i = 0; i < 10; i++) {
    let topTracks = response.toptracks.track[i].name
    
    console.log(topTracks);
        $("#top-tracks").append(topTracks);

    }

  });  
 }; 
 
 function getArtistInfo(){

  $.ajax({
    url: infoURL,
    method: "GET"
  }).then(function (response) {
    $("#artist-info").empty();
    $("#band-name").empty();
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