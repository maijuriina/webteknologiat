var pictures_json = '[{"name": "Siru makaa","src": "images/Siru makaa.jpg"},{"name": "Siru kerällä","src": "images/Siru kerällä.jpg"}, {"name": "Siru epäilee","src": "images/Siru epäilee.jpg"}]';
pictures_array = JSON.parse(pictures_json);
var i;
var reeling;


$("#currentImg").attr('src', pictures_array[0].src);
$("#currentName").html(pictures_array[0].name);

$(function autoChange() {

    reeling = setTimeout(autoChange, 3000);

    if (i<pictures_array.length-1) {
        pictures_array[i++];
        $("#currentImg").attr('src', pictures_array[i].src);
        $("#currentName").html(pictures_array[i].name);
    }
    else {
        i = 0;
        $("#currentImg").attr('src', pictures_array[i].src);
        $("#currentName").html(pictures_array[i].name);
    }
});

$("#ppBtn").click(function playPause(){
    if (reeling != null) {
        clearTimeout(reeling);
        reeling = null;
    }
    else {
        reeling = setTimeout(autoChange, 3000);
    }
});

$("#backBtn").click(function goBack() {
    if (i>=pictures_array.length-1) {
        pictures_array[i--];
    }
    else {
        i = pictures_array.length-1;
    }
    $("#currentImg").attr('src', pictures_array[i].src);
    $("#currentName").html(pictures_array[i].name);
});

$("#forwardBtn").click(function goForward() {
    if (i<pictures_array.length-1) {
        pictures_array[i++];
    }
    else {
        i = 0;
    }
    $("#currentImg").attr('src', pictures_array[i].src);
    $("#currentName").html(pictures_array[i].name);
});