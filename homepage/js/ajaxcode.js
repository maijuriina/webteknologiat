var index;
var numbersUrl = 'http://numbersapi.com/random/trivia';

$(document).ready(function () {
    $("#loading").hide();
    index = 0;
})

$("#btn").click(function () {
    $("#loading").show();

    $.ajax({
        type: "GET",
        url: numbersUrl,
        dataType: "text",
        success: function (response) {
            $("#loading").hide();
            $("#numbersInfo").append("<br><br>" + "<i>" + response + "</i>");
            index++;
            $("aside").html("Laskuri: "+ index);
        },
        error: function (errorResponse) {
            $("#loading").hide();
            console.log("Error msg");
        }
    });
});