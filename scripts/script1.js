/* global document*/
var dimage = document.querySelector('img');

dimage.onclick = function () {
    'use strict';
    var myimages = dimage.getAttribute('src');
    if (myimages === 'images/vr.jpg') {
        dimage.setAttribute('src', 'images/bridge.jpg');
    } else {
        dimage.setAttribute('src', 'images/vr.jpg');
    }
};


// personalised welcome Message

var namebutton = document.querySelector('button');
var myheading = document.querySelector('h1');

/* global localStorage , window */

function setsusrname() {
    'use strict';
    var myname = window.prompt('please enter your name');
    localStorage.setItem('name', myname);
    myheading.textContent = "welcome my friend" + " " + myname;
    
}

if (!localStorage.getItem('name')) {
    setsusrname();
} else {
    var storedname = localStorage.getItem('name');
    myheading.textContent = 'have a nice day' + storedname;
}
namebutton.onclick = function () {
    'use strict';
    setsusrname();
};