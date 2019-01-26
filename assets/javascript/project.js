//ajax call to Bands In Town api

$("#artist-submit").click(function () {


  let artist = $("#artist-input").val().trim();
  let bandsInTownEvents = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp&date=upcoming`
  let bandsInTownArtist = `https://rest.bandsintown.com/artists/${artist}?app_id=codingbootcamp`
  
  $.ajax({
      url: bandsInTownEvents,
      method: "GET"
  }).then(function (response) {
    console.log(response);
     
    
let myTicketLink= response[0]["url"]

$("#dateTime").append(response[0].datetime);
$("#venueName").append(response[0].venue.name);
$("#venueCity").append(response[0].venue.city);
$("#venueCountry").append(response[0].venue.country);
$("#offersUrl").append(`<button><a href = ${myTicketLink}; target="_blank">Purchase Tickets Now</a></button>`);
    
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






