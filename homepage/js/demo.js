function writeLines() {
    console.log("Eka rivi!");
    alert("Eka ilmoitus!");
}

function checkLetter() {
    var letter = document.getElementById("txt").value;
    if (letter.toUpperCase() == "A" || letter.toUpperCase() == "B" || letter.toUpperCase() == "C" || letter.toUpperCase() == "D") {
        console.log("Oikein! " + letter + " on oikea vastaus!");
    }
    else {
        console.log("Väärin :( " + letter + " ei ole oikea vastaus..");
    }
}

function checkNumber() {
    var nmbr = document.getElementById("nmbr").value;
    if (nmbr >= 1 && nmbr <= 10) {
        console.log(nmbr + " x " + nmbr + " on yhtä kuin " + nmbr*nmbr);
    }
    else {
        console.log("Ei kelpaa!");
    }
}

function findAddress() {
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var src = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    document.getElementById('gmap_canvas').src = src;
}

window.onload = function() {
    var src = 'https://www.google.com/maps?q=Kauppakatu1+Lappeenranta&output=embed';
    document.getElementById('gmap_canvas').src = src;
}
