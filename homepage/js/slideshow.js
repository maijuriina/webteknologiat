var pictures_json = '[{"name": "Siru makaa","src": "images/Siru makaa.jpg"},{"name": "Siru kerällä","src": "images/Siru kerällä.jpg"}, {"name": "Siru epäilee","src": "images/Siru epäilee.jpg"}, {"name": "Siru auttaa opiskelussa","src": "images/Siru auttaa opiskelussa.jpg"}, {"name": "Siru köllöttää","src": "images/Siru köllöttää.jpg"}, {"name": "Siru matolla","src": "images/Siru matolla.jpg"}]';
pictures_array = JSON.parse(pictures_json);
var i;
var reeling;
var savedI = "index";

// binding clicks to functions with jquery
$("#backBtn").on("click", goBack);
$("#forwardBtn").on("click", goForward);
$("#ppBtn").on("click", playPause);

// when page is loaded, autoChange initiates
$(autoChange());

// autoChange reels pictures until reeling-value changes
function autoChange() {

    reeling = setTimeout(autoChange, 2500);

    i = localStorage.getItem(savedI);
    
    if (i<pictures_array.length-1) {
        pictures_array[i++];
    }
    else {
        i = 0;
    }

    $("#currentImg").fadeTo(500, 0, function() {
        $("#currentImg").attr('src', pictures_array[i].src);
        $("#currentName").html(pictures_array[i].name);
    }).fadeTo(1500, 1);
    localStorage.setItem(savedI, i);
};

// checks whether to play or pause autoChange
function playPause() {
    if (reeling != null) {
        clearTimeout(reeling);
        reeling = null;
        $("#pp").attr('class', 'fas fa-play');
    }
    else {
        $("#pp").attr('class', 'fas fa-pause');
        reeling = setTimeout(autoChange, 2500);
    }
};

function goBack() {
    if (i==0) {
        i = pictures_array.length-1;
    }
    else {
        i--;
    }
    localStorage.setItem(savedI, i);
    $("#currentImg").fadeTo(500, 0, function() {
        $("#currentImg").attr('src', pictures_array[i].src);
        $("#currentName").html(pictures_array[i].name);
    }).fadeTo(1500, 1);
};

function goForward() {   
    if (i<pictures_array.length-1) {
        pictures_array[i++];
    }
    else {
        i = 0;
    }
    localStorage.setItem(savedI, i);

    $("#currentImg").fadeTo(500, 0, function() {
        $("#currentImg").attr('src', pictures_array[i].src);
        $("#currentName").html(pictures_array[i].name);
    }).fadeTo(1500, 1);
};