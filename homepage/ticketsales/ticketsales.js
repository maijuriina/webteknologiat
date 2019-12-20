var priceArray_json = '[{"id": 0,"name": "standard","percentage": 1}, {"id": 1,"name": "halfPrice","percentage": 0.5}, {"id": 2,"name": "member","percentage": 0.85 }, {"id": 3,"name": "student","percentage": 0.55}, {"id": 4,"name": "studentMember","percentage": 0.4}, {"id": 5,"name": "free","percentage": 0}]';
priceArray = JSON.parse(priceArray_json);
var standard = priceArray[0];
var halfPrice = priceArray[1];
var member = priceArray[2];
var student = priceArray[3];
var studentMember = priceArray[4];
var freeOfCharge = priceArray[5];
let finalPrice;
let ageFinalPrice;
let statusFinalPrice;

// disables conscript or student checkbox if one of the other is checked
function boxControl () {
    if (!$("#student").prop("checked")) {
        $("#conscript").removeAttr("disabled");
    } else {
        $("#conscript").attr("disabled", true);
    }

    if (!$("#conscript").prop("checked")) {
        $("#student").removeAttr("disabled");
    } else {
        $("#student").attr("disabled", true);
    }
};

// checks which boxes have been checked and assigns correct statusFinalPrice
function calculateStatusDiscount () {
    if ($("#student").prop("checked")) {
        statusFinalPrice = student.percentage * 16;

    } else if ($("#MTKmember").prop("checked")) {
        statusFinalPrice = member.percentage * 16;

        if ($("#student").prop("checked")) {
            statusFinalPrice = studentMember.percentage * 16;
        }

    } else if ($("#conscript").prop("checked")) {
        statusFinalPrice = halfPrice.percentage * 16;

    } else {
        statusFinalPrice = standard.percentage * 16;
    }

    return statusFinalPrice;
};

// writes first name on ticket
$("#firstName").keyup(function() {
    $(".ticketFirstName").html($("#firstName").val());
});

// writes last name on ticket
$("#lastName").keyup(function() {
    $(".ticketLastName").html(" " + $("#lastName").val());
});

// checks age discount and assigns it to ageFinalPrice
function calculateAgeDiscount() {
    var age = $("#age").val();
    if (age < 7) {
        ageFinalPrice = freeOfCharge.percentage * 16;
    } else if (age >= 7 && age <= 15 || age >= 65) {
        ageFinalPrice = halfPrice.percentage * 16;
    } else {
        ageFinalPrice = standard.percentage * 16;
    }
    return ageFinalPrice;
};

// compares status and age discounts and declares best price as the final price
function comparePrice (statusFinalPrice, ageFinalPrice) {
    if (statusFinalPrice > ageFinalPrice) {
        finalPrice = ageFinalPrice;
    } else {
        finalPrice = statusFinalPrice;
    }
    $(".priceCategory").html(finalPrice + " €");
};

// fires all functions at the end of filling the form
$(".getData").on("click", function () {
    statusFinalPrice = calculateStatusDiscount();
    ageFinalPrice = calculateAgeDiscount();
    comparePrice(statusFinalPrice, ageFinalPrice);
})