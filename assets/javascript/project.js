let bandsInTownKey = 'codingbootcamp'



$("#").on("click", function () {

    let artist = $("#").val().trim();
    let bandsInTownQueryURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=${bandsInTownKey}&date=${upcoming_events}`

    $.ajax({ url: bandsInTownQueryURL, method: "get" }).then(function(bIT_EventResponse) {
        bIT_EventResponse;
        $("#").append(
            /* there isn't that much data on their website it really is pretty limited, 
                I think the best that can be done with it is organizing into general artist info
                sort of block styled~ but I am unsure need input */
        )
    })

});

function artistInfo() {
    bandsInTownQueryURL = `https://rest.bandsintown.com/artists/${artist}?app_id=codingbootcamp`

    $.ajax ({url: bandsInTownQueryURL, method: "get"}).then(function(bIT_ArtistResponse) {
        let {name, thumb_url, tracker_count, upcoming_event_count, url} = bIT_ArtistResponse
        
    })
}