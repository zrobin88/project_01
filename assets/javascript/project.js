var topTracksResponse;
var artistInfoResponse;
var eventInfoResponse;
var artistInfo;
var artistImg;
var bandName;


//on-click event for the Artist Tab that loads Artist data as well as top track listings and clears all previous dynamic html
$("#artist-tab").on("click", function () {

  $("#artist-info").html('');
  $("#track-dump").html('');
  $("#band-picture").html('');
  $("#band-name").html('');
  $("#similar-buttons").html('');
  $("#row-0").html('');
  $("#row-1").html('');
  $("#row-2").html('');
  $("#row-3").html('');
  $("#row-4").html('');
  $("#row-5").html('');

  $("#hidden-card-artist").removeClass("hide");
  $("#hidden-card-events").addClass("hide");

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
  $("#similar-buttons").html('');
  $("#row-0").html('');
  $("#row-1").html('');
  $("#row-2").html('');
  $("#row-3").html('');
  $("#row-4").html('');
  $("#row-5").html('');

  $("#hidden-card-artist").addClass("hide");
  $("#hidden-card-events").removeClass("hide");

  //destructuring
  let { _embedded: { events, images, dates, venues } } = eventInfoResponse;

  for (let i = 0; i < 6; i++) {
    $(`#row-${i}`).append(`
        <a href="${events[i].url} target="_blank">
          <div class="col s3">
            <img class="responsive-img" src="${events[i].images[0].url}">
          </div>
          <div class="col s9">
            <h6 id="text-deco-none">${events[i]._embedded.venues[0].city.name}, ${events[i]._embedded.venues[0].country.countryCode}</h6>
            <h4>${events[i]._embedded.venues[0].name}</h4>
            <p>${events[i].dates.start.localDate}</p>
            <p>${moment(events[i].dates.start.localTime, "HH:mm:ss").format("h:mm A")}</p>
          </div>
        </a>
      `)
  }

});

// click event for submit button  
$("#artist-submit").on("click", function () {

  event.preventDefault();

  let userInput = $("#artist-input").val().trim();

  let topTracksURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${userInput}&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json`

  let artistInfoURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${userInput}&api_key=43e2eac1bdb3ea4e9d978121427666c0&format=json`

  let eventInfoURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=${userInput}`
  
  $("#band-picture").html('');
  $("#artist-info").html('');
  $("#band-name").html('');
  $("#track-dump").html('');
  $("#similar-buttons").html('');
  $("#row-0").html('');
  $("#row-1").html('');
  $("#row-2").html('');
  $("#row-3").html('');
  $("#row-4").html('');
  $("#row-5").html('');

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
      track_dump_div.append(`
        <li class="white-text center-align" style="margin-left: 10px">
        ${response_tt.toptracks.track[i].name}
        </li> 
     `)}
    track_dump_div.append("</ul>");
  });


  //last.fm artist information ajax call
  $.ajax({
    url: artistInfoURL,
    method: "GET"
  }).then(function (response_ai) {
    let similarArtistButton = $("#similar-buttons");
    artistInfo = response_ai.artist.bio.summary;
    artistImg = response_ai.artist.image[4]["#text"];
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

  $.ajax({
    url: eventInfoURL,
    method: "GET"
  }).then(function (response_ei) {

    eventInfoResponse = response_ei;

  })


  $("#hidden-card-artist").removeClass("hide");

  $("#artist-input").val('');

});
