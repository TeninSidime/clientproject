/* global $ */

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});



$("#home").click(function () {
    $('.classofdivcontaininginfo').show();
    $('.classofdivcontainigwhatyouwannahide').hide();
});


$("#info").click(function () {
    console.log('heyo');
    $('.mattexample').show();
    $('.homepage').hide();
});



$("#order").click(function () {
    $('.classofdivcontaininginfo').show();
    $('.homepage').hide();
});