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

function findLocation() {
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var src = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    document.getElementById('gmap_canvas').src = src;
}

window.onload = function() {
    var src = 'https://www.google.com/maps?q=Kauppakatu1+Lappeenranta&output=embed';
    document.getElementById('gmap_canvas').src = src;
    document.getElementById('firstRandom').value = getRandomArbitrary(1, 10);
    document.getElementById('secondRandom').value = getRandomArbitrary(1, 10);
}


function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function decreaseValue(randomMinus) {
    if (document.getElementById(randomMinus).value > 1) {
        document.getElementById(randomMinus).value--;
    } 
}

function increaseValue(randomPlus) {
    if (document.getElementById(randomPlus).value < 10) {
        document.getElementById(randomPlus).value++;
    } 
}

function calcValues(firstValue, secondValue) {
    if (document.getElementById('calc-select').value === 'addition')
    {
        document.getElementById('result').value = parseInt(document.getElementById(firstValue).value) + 
        parseInt(document.getElementById(secondValue).value);
    }

    if (document.getElementById('calc-select').value === 'subtraction')
    {
        document.getElementById('result').value = parseInt(document.getElementById(firstValue).value) - 
        parseInt(document.getElementById(secondValue).value);
    }

    if (document.getElementById('calc-select').value === 'multiplication')
    {
        document.getElementById('result').value = parseInt(document.getElementById(firstValue).value) * 
        parseInt(document.getElementById(secondValue).value);
    }

    if (document.getElementById('calc-select').value === 'division')
    {
        document.getElementById('result').value = parseInt(document.getElementById(firstValue).value) / 
        parseInt(document.getElementById(secondValue).value);
    }

}
