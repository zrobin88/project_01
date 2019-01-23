

$(document).ready(function(){
  $('.tabs').tabs();
});
 
var topTrack0 = ["","","","","","","","","",""];
var topTracksResponse;
var artistInfoResponse;
var artistInfo;
var artistImg; 
var bandName; 

$("#artist-tab").on("click", function(){
  $("#track-dump").html(""); 
  track_dump_div = $("#track-dump");
  for (let i =0; i<10; i++){
  track_dump_div.append(`
  <div class="row"> <div class="card blue-grey darken-1"> <div class="card-content white-text" id="top-tracks">
  <h1>${topTracksResponse.toptracks.track[i].name}</h1> </div> </div> </div>
  `);
  } 
  $("#artist-info").append(artistInfo);
  $("#artist-info").append(`<img src="${artistImg}"/>`);
  $("#band-name").text(bandName);
});

$("#events-tab").on("click", function(){
  $("#artist-info").html('');
  $("#band-name").html('');
  $("#track-dump").html('');
});

// click event for submit button  
$("#artist-submit").on("click", function () {

  $("#artist-info").html('');
  $("#band-name").html('');
  $("#track-dump").html('');

  event.preventDefault();

  // variable for user input 
  let userInput = $("#artist-input").val();

  // last.fm top tracks 
  let topTracksURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${userInput}&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json`
  console.log(topTracksURL);

  // last.fm artist info 
  let infoURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${userInput}&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json`

  //ajax call to last.fm api 
  $.ajax({
    url: topTracksURL,
    method: "GET"
  }).then(function (response_tt) {
    topTracksResponse = response_tt; 
    let track_dump_div = $("#track-dump");
    for (let i = 0; i < 10; i++) {
      topTrack0[i] = response_tt.toptracks.track[i].name;
      track_dump_div.append(`
      <div class="row"> <div class="card blue-grey darken-1"> <div class="card-content white-text" id="top-tracks">
      <h1>${response_tt.toptracks.track[i].name}</h1> </div> </div> </div>
      `)
    }
  });


  // function for obtaining artist info from

  $.ajax({
    url: infoURL,
    method: "GET"
  }).then(function (response_ai) {
    console.log(response_ai);
    console.log(response_ai.artist.bio);
     artistInfo = response_ai.artist.bio.summary;
     artistImg = response_ai.artist.image[3]["#text"]; 
     bandName = response_ai.artist.name
     artistInfoResponse = response_ai; 
    $("#artist-info").append(artistInfo);
    $("#artist-info").append(`<img src="${artistImg}"/>`);
    $("#band-name").text(bandName);
  })



});
