var index;
var numbersUrl = 'http://numbersapi.com/random/trivia';
var jokesUrl = 'http://api.icndb.com/jokes/random/1';

$(function () {
    $("#loadingFact").hide();
    $("#loadingJoke").hide();
    index = 0;
})

$("#factFetch").click(function () {
    $("#loadingFact").show();

    $.ajax({
        type: "GET",
        url: numbersUrl,
        dataType: "text",
        success: function (response) {
            $("#loadingFact").hide();
            $("#numbersInfo").append("<br><br>" + "<i>" + response + "</i>");
            index++;
            $("aside").html("Faktalaskuri: "+ index);
        },
        error: function (errorResponse) {
            $("#loadingFact").hide();
            console.log(errorResponse);
        }
    });
});

$("#jokeFetch").click(function () {
    $("#loadingJoke").show();

    $.ajax({
        type: "GET",
        url: jokesUrl,
        dataType: "json",
        success: function (response) {
            $("#loadingJoke").hide();
            // $.each on sama kuin for-loop
            $.each( response.value, function (index, jokeObject) {
                $("#jokeDisplay").append("<br><br>" + "<i>" + jokeObject.joke + "</i>");
            })
        }, error: function (errorResponse) {
            $("#loadingJoke").hide();
            console.log(errorResponse);
        }
    })
})

