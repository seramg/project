var add = document.getElementById("inc");
var remove = document.getElementById("dec");
var zero = document.getElementById("res");
var count = document.getElementById("count");

var integer = 0;
function increement() {
    integer = integer + 1;
    count.innerHTML = integer;

}
function decreement() {
    integer = integer - 1;
    count.innerHTML = integer;

}
function reset() {

    integer = 0;
    count.innerHTML = integer;

}