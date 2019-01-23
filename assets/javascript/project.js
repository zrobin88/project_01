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

       // var info = {
       //     date: response[i].datetime,
       //     ticketURL: response[i].offers[0].url,
       //     venueName: response[i].venue.name,
       //     venueCity: response[i].venue.city,
       //     venueCountry: response[i].venue.country,
       // };

       for (let i = 0; i < 5; i++) {
           console.log(response[i]);
        $("#events").append(response[i].datetime);
        $("#events").append(response[i].offers[0].url);
        $("#events").append(response[i].venue.name);
        $("#events").append(response[i].venue.city);
        $("#events").append(response[i].venue.country);
       }


   });
});
