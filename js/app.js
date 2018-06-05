'use strict';

var firstQuestion = prompt('Am I from Earth?');
var secondQuestion = prompt('Am I a male?');
var thirdQuestion = prompt('Do I eat food?');
var fourthQuestion = prompt('Do I go outside?');
var fifthQuestion = prompt('Do I own a pet?');

if (firstQuestion === 'Y'){
    alert('yes!');
}
else if (firstQuestion === 'N'){
    alert('no!')
}
else {
    alert("Not a recognizable answer")
}

if (secondQuestion === 'Y'){
    alert('yes!');
}
else if (secondQuestion === 'N'){
    alert('no!')
}
else {
    alert("Not a recognizable answer")
}

