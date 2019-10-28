var pictures_json = '[{"name": "Siru makaa","src": "images/Siru makaa.jpg"},{"name": "Siru kerällä","src": "images/Siru kerällä.jpg"}, {"name": "Siru epäilee","src": "images/Siru epäilee.jpg"}]';
pictures_array = JSON.parse(pictures_json);
var i;
var reeling;

// binding clicks to functions with jquery
$("#backBtn").on("click", goBack);
$("#forwardBtn").on("click", goForward);
$("#ppBtn").on("click", playPause);

// when page is loaded, autoChange initiates
$(autoChange());

// autoChange reels pictures until reeling-value changes
function autoChange() {
    reeling = setTimeout(autoChange, 2000);
    
    if (i<pictures_array.length-1) {
        pictures_array[i++];
    }
    else {
        i = 0;
    }

    $("#currentImg").attr('src', pictures_array[i].src);
    $("#currentName").html(pictures_array[i].name);
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
        reeling = setTimeout(autoChange, 2000);
    }
};

function goBack() {
    if (i==0) {
        i = pictures_array.length-1;
    }
    else {
        i--;
    }
    $("#currentImg").attr('src', pictures_array[i].src);
    $("#currentName").html(pictures_array[i].name);
};

function goForward() {   
    if (i<pictures_array.length-1) {
        pictures_array[i++];
    }
    else {
        i = 0;
    }
    $("#currentImg").attr('src', pictures_array[i].src);
    $("#currentName").html(pictures_array[i].name);
};