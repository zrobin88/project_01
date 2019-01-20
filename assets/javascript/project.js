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
    console.log(response);
    let artistInfo = response.bio;
    $()
  }

  
 }



$("#artist-submit").on("click", function(){
 
let userInput = $("#artist-input").val();

 let topTracksURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+userInput+"&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json"

 let infoURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+userInput+"&api_key=api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json"

 getArtistInfo();
 getToptracks(); 

});