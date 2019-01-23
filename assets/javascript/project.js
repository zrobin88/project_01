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
    $("#dateTime").append(response[i].datetime);
    $("#offersUrl").append(response[i].offers[0].url);
    $("#venueName").append(response[i].venue.name);
  $("#venueCity").append(response[i].venue.city);
   $("#venueCountry").append(response[i].venue.country);
      
        }


    });
});

//$("#events").text(response[0].offers[0].on_sale_datetime);
//response[0].datetime
// response[0].offers[0].on_sale_datetime***
// response[0].offers[0].url
// response[0].venue.name
// response[0].venue.city
// response[0].venue.region**
// response[0].venue.country