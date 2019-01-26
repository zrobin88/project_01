/


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

  //ajax call to Bands In Town api

$("#artist-submit").click(function () {


  let artist = $("#artist-input").val().trim();
  let bandsInTownEvents = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp&date=upcoming`
  let bandsInTownArtist = `https://rest.bandsintown.com/artists/${artist}?app_id=codingbootcamp`
  
  $.ajax({
      url: bandsInTownEvents,
      method: "GET"
  }).then(function (response) {
  
     
    
let myTicketLink= response[0]["url"]

$("#dateTime").append(response[0].datetime);
$("#venueName").append(response[0].venue.name);
$("#venueCity").append(response[0].venue.city);
$("#venueCountry").append(response[0].venue.country);
$("#offersUrl").append(`<button><a href = ${myTicketLink}; target="_blank" class="tickets">Purchase Tickets Now</a></button>`);
    
let myTicketLinkTwo= response[1]["url"]
   
$("#dateTimeTwo").append(response[1].datetime);
$("#venueNameTwo").append(response[1].venue.name);
$("#venueCityTwo").append(response[1].venue.city);
$("#venueCountryTwo").append(response[1].venue.country);
$("#offersUrlTwo").append(`<button><a href = ${myTicketLinkTwo};">Purchase Tickets Now</a></button>`);

let myTicketLinkThree= response[3]["url"]
   
$("#dateTimeThree").append(response[3].datetime);
$("#venueNameThree").append(response[3].venue.name);
$("#venueCityThree").append(response[3].venue.city);
$("#venueCountryThree").append(response[3].venue.country);
$("#offersUrlThree").append(`<button><a href = ${myTicketLinkThree};">Purchase Tickets Now</a></button>`);
  

  });
});





});