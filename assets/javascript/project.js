var topTracksResponse;
var artistInfoResponse;
var artistInfo;
var artistImg;
var bandName;


//on-click event for the Artist Tab that loads Artist data as well as top track listings and clears all previous dynamic html
$("#artist-tab").on("click", function () {
  $("#artist-info").html('');
  $("#track-dump").html('');
  $("#band-picture").html('');
  $("#band-name").html('');;

  track_dump_div = $("#track-dump");

  track_dump_div.append(`<h2 class="flow-text center-align white-text">What to listen to</h2>`)
  track_dump_div.append(`<ul>`)

  for (let i = 0; i < 10; i++) {
    track_dump_div.append(`<li class="white-text center-align" style="margin-left: 10px">
       ${topTracksResponse.toptracks.track[i].name}
    </li> `)
  }

  track_dump_div.append("</ul>")


  $("#artist-info").append(artistInfo);
  $("#band-picture").append(`<img class="responsive-img" src="${artistImg}"/>`);
  $("#band-name").append(`<h2 class="flow-text center-align">${bandName}</h2>`);

});

//on-click event for the Events Tab that loads Events data and clears all previous dynamic html
$("#events-tab").on("click", function () {

  $("#artist-info").html('');
  $("#band-name").html('');
  $("#track-dump").html('');
  $("#band-picture").html('');

});

// click event for submit button  
$("#artist-submit").on("click", function () {

  event.preventDefault();

  let userInput = $("#artist-input").val().trim();

  let topTracksURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${userInput}&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json`

  let artistInfoURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${userInput}&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json`


  $("#band-picture").html('');
  $("#artist-info").html('');
  $("#band-name").html('');
  $("#track-dump").html('');

  //last.fm top tracks ajax call
  $.ajax({
    url: topTracksURL,
    method: "GET"
  }).then(function (response_tt) {

    topTracksResponse = response_tt;
    track_dump_div = $("#track-dump");
    track_dump_div.append(`<h2 class="flow-text center-align white-text">What to listen to</h2>`)
    track_dump_div.append(`<ul>`)
    for (let i = 0; i < 10; i++) {

      track_dump_div.append(`<li class="white-text center-align" style="margin-left: 10px">
           ${response_tt.toptracks.track[i].name}
     </li> `)
    }
    track_dump_div.append("</ul>");
  });


  //last.fm artist information ajax call
  $.ajax({
    url: artistInfoURL,
    method: "GET"
  }).then(function (response_ai) {
    let similarArtistButton = $("#similar-buttons");
    artistInfo = response_ai.artist.bio.summary;
    artistImg = response_ai.artist.image[2]["#text"];
    bandName = response_ai.artist.name
    artistInfoResponse = response_ai;
    $("#artist-info").append(artistInfo);
    $("#band-picture").append(`<img class="responsive-img" src="${artistImg}"/>`);
    $("#band-name").append(`<h2 class="flow-text center-align">${bandName}</h2>`);
    
    for (let i = 0; i < 2; i++) {
      similarArtistButton.append(`
        <a href=${response_ai.artist.similar.artist[i].url}>
          <img src=${response_ai.artist.similar.artist[i].image[1]["#text"]} title="${response_ai.artist.similar.artist[i].name}">
        </a>
    
      
      `)
    }

  })


  $("#hidden-card").removeClass("hide");

  $("#artist-input").val('');

});
