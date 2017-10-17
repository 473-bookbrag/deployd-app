/*Took some of these from w3schools*/

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    $('.hamburger').hide();
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    $('.hamburger').show();
}
