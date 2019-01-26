//ajax call to Bands In Town api

$("#artist-submit").click(function () {


    let artist = $("#artist-input").val().trim();
    let bandsInTownEvents = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp&date=upcoming`
    let bandsInTownArtist = `https://rest.bandsintown.com/artists/${artist}?app_id=codingbootcamp`
    $.ajax({
        url: bandsInTownEvents,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
       
      
        for (let i = 0; i < 5; i++) {
    
     console.log(response[i]);
     let myTicketLink= response[i]["url"]
 
     
    $("#dateTime").append(response[i].datetime);
   $("#offersUrl").append(`<button><a href = ${myTicketLink};">Purchase Tickets Now</a></button>`);
    $("#venueName").append(response[i].venue.name);
  $("#venueCity").append(response[i].venue.city);
   $("#venueCountry").append(response[i].venue.country);
      
        }


    });
});












//ajax call to Bands In Town api

$("#artist-submit").click(function () {


    let artist = $("#artist-input").val().trim();
    let ticketmasterArtist= `https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=${artist}`
    $.ajax({
        url: ticketmasterArtist,
        method: "GET"
    }).then(function (response) {
       console.log(response[0]["_embedded"].events[0]["url"]);
      // let myTicketLink= response[i]._embedded.events[i]["url"]
       
  //   $("#dateTime").append(response[i]._embedded.events[i].dates.start[2]);
  //   $("#offersUrl").append(`<button><a href = ${myTicketLink};">Purchase Tickets Now</a></button>`);
  //    $("#venueName").append(response[i].venue.name);
  //  $("#venueCity").append(response[i].venue.city);
  //   $("#venueCountry").append(response[i].venue.country);
  


   
    });
});

