var index;
var userIndex;
var numbersUrl = 'http://numbersapi.com/random/trivia';
var jokesUrl = 'http://api.icndb.com/jokes/random/1';
var taskUrl = 'http://localhost:8080/tasks';
var searchUrl;

$(function () {
    $("#loadingFact").hide();
    $("#loadingJoke").hide();
    $("#loadingTask").hide();
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

$("#taskFetch").click(function () {
    $("#loadingTask").show();
    
        $.ajax({
            type: "GET",
            url: taskUrl,
            dataType: "json",
            success: function (response) {
                $("#loadingTask").hide();
                // $.each on sama kuin for-loop
                $.each( response, function (index, taskObject) {
                    $("#taskDisplay").append("<br><br>" + "<i>" + taskObject.title + ". " + taskObject.description + "</i>");
                });
            }, error: function (errorResponse) {
                $("#loadingTask").hide();
                console.log(errorResponse);
            }
        })
    })

$("#oneTaskFetch").click(function () {
    $("#loadingTask").show();
        userIndex = $("#taskSearch").val();
        console.log(userIndex);
        searchUrl = taskUrl + "/" + userIndex;
        console.log(searchUrl);
    
        $.ajax({
            type: "GET",
            url: searchUrl,
            dataType: "text",
            success: function (response) {
                $("#loadingTask").hide();
                $("#oneTaskDisplay").append("<br><br>" + "- " + "<i>" + response + "</i>");

            }, error: function (errorResponse) {
                $("#loadingTask").hide();
                console.log(errorResponse);
            }
        })
    })