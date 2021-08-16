let body = document.getElementById('body');

let violet = document.getElementById('first');
let indigo = document.getElementById('second');
let blue = document.getElementById('third');
let green = document.getElementById('fourth');
let yellow = document.getElementById('fifth');
let orange = document.getElementById('sixth');
let red = document.getElementById('seventh');


// Violet
var violet_first_click = true;
violet.onclick = function () {
    if (violet_first_click) {
        violet_change();
        violet_first_click = false;
        indigo_first_click = true;
        blue_first_click = true;
        green_first_click = true;
        yellow_first_click = true;
        orange_first_click = true;
        red_first_click = true;
    }
    else {
        violet_nochange();
        violet_first_click = true;
    }
}
function violet_change() {
    body.style.background = "violet";
}
function violet_nochange() {
    body.style.background = "white";
}


// Indigo
var indigo_first_click = true;
indigo.onclick = function () {
    if (indigo_first_click) {
        indigo_change();
        violet_first_click = true;
        indigo_first_click = false;
        blue_first_click = true;
        green_first_click = true;
        yellow_first_click = true;
        orange_first_click = true;
        red_first_click = true;
    }
    else {
        indigo_nochange();
        indigo_first_click = true;
    }
}
function indigo_change() {
    body.style.background = "indigo";
}
function indigo_nochange() {
    body.style.background = "white";
}

// Blue
var blue_first_click = true;
blue.onclick = function () {
    if (blue_first_click) {
        blue_change();
        violet_first_click = true;
        indigo_first_click = true;
        blue_first_click = false;
        green_first_click = true;
        yellow_first_click = true;
        orange_first_click = true;
        red_first_click = true;
    }
    else {
        blue_nochange();
        blue_first_click = true;
    }
}
function blue_change() {
    body.style.background = "blue";
}
function blue_nochange() {
    body.style.background = "white";
}

// Green
var green_first_click = true;
green.onclick = function () {
    if (green_first_click) {
        green_change();
        violet_first_click = true;
        indigo_first_click = true;
        blue_first_click = true;
        green_first_click = false;
        yellow_first_click = true;
        orange_first_click = true;
        red_first_click = true;
    }
    else {
        green_nochange();
        green_first_click = true;
    }
}
function green_change() {
    body.style.background = "green";
}
function green_nochange() {
    body.style.background = "white";
}

// Yellow
var yellow_first_click = true;
yellow.onclick = function () {
    if (yellow_first_click) {
        yellow_change();
        violet_first_click = true;
        indigo_first_click = true;
        blue_first_click = true;
        green_first_click = true;
        yellow_first_click = false;
        orange_first_click = true;
        red_first_click = true;
    }
    else {
        yellow_nochange();
        yellow_first_click = true;
    }
}
function yellow_change() {
    body.style.background = "yellow";
}
function yellow_nochange() {
    body.style.background = "white";
}

// Orange
var orange_first_click = true;
orange.onclick = function () {
    if (orange_first_click) {
        orange_change();
        violet_first_click = true;
        indigo_first_click = true;
        blue_first_click = true;
        green_first_click = true;
        yellow_first_click = true;
        orange_first_click = false;
        red_first_click = true;
    }
    else {
        orange_nochange();
        orange_first_click = true;
    }
}
function orange_change() {
    body.style.background = "orange";
}
function orange_nochange() {
    body.style.background = "white";
}

// Red
var red_first_click = true;
red.onclick = function () {
    if (red_first_click) {
        red_change();
        violet_first_click = true;
        indigo_first_click = true;
        blue_first_click = true;
        green_first_click = true;
        yellow_first_click = true;
        orange_first_click = true;
        red_first_click = false;
    }
    else {
        red_nochange();
        red_first_click = true;
    }
}
function red_change() {
    body.style.background = "red";
}
function red_nochange() {
    body.style.background = "white";
}
