/* global $ */

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});


function showHomepage() {
    $('#homepage').show();
    $('#infopage').hide();
    $('#orderpage').hide();
}

// when the page is ready... make sure homepage shows up but nothing else
$(function () {
    showHomepage();
})

$("#home").click(function () {
    showHomepage();
});

$("#getData").click(function (){
    var zipString = $("#zip").val();
    console.log(zipString);
    if(zipString.length != 5) {
        alert("invalid zip code, I only accept 5 digit zips, I'm just not that clever sorry!");
    } else {
        // https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22
        
        var apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipString + ',us&appid=3bb00f30e525b91a1deb9cbd20254379';
        console.log(apiURL);
    }
    // 40.7128° N, 74.0060°
    
});


$("#info").click(function () {
    $('#homepage').hide();
    $('#infopage').show();
    $('#orderpage').hide();
});



$("#order").click(function () {
    $('#homepage').hide();
    $('#infopage').hide();
    $('#orderpage').show();
});