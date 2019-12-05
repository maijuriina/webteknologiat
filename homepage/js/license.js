$(".licenseBox").keyup(function() {
    if(this.value.length === 4) {
        $(this).next(".licenseBox").focus();
    }
});

$("#midBox, #endBox").click(function () {
    $("#startBox").focus();
});

$("#resetBtn").click(function () {
    $(".licenseBox").val = '';
});