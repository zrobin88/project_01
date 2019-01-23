var topTracks;

// click event for submit button  
$("#artist-submit").on("click", function () {
  $("#artist-info").html('');
  $("#band-name").html('');
  $("#top-tracks").html('');

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
  }).then(function (response) {
    let track_dump_div = $("#track-dump");
    for (let i = 0; i < 10; i++) {
      track_dump_div.append(`
      <div class="row"> <div class="card blue-grey darken-1"> <div class="card-content white-text" id="top-tracks">
      <h1>${response.toptracks.track[i].name}</h1> </div> </div> </div>
      `)
    }
  });


  // function for obtaining artist info from

  $.ajax({
    url: infoURL,
    method: "GET"
  }).then(function (response) {
    console.log(response.artist.bio);
    let artistInfo = response.artist.bio.summary;
    $("#artist-info").append(artistInfo);
    $("#band-name").text(response.artist.name);
  })



});
