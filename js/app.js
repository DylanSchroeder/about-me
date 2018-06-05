'use strict';

var firstQuestion = prompt('Am I from Earth?');
var sanitizedAnswer = firstQuestion.toUpperCase().trim();
if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
    alert('yes!');
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
    alert('no!');
}
else {
    alert("Not a recognizable answer");
}
console.log('Earth? ' + sanitizedAnswer); 

var secondQuestion = prompt('Am I female?');
var sanitizedAnswer = secondQuestion.toUpperCase().trim();
if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
    alert('yes!');
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
    alert('no!');
}
else {
    alert("Not a recognizable answer");
}
console.log('Female? ' + sanitizedAnswer); 

var thirdQuestion = prompt('Do I like animals?');
var sanitizedAnswer = thirdQuestion.toUpperCase().trim();
if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
    alert('yes!');
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
    alert('no!');
}
else {
    alert("Not a recognizable answer");
}
console.log('Like Animals ' + sanitizedAnswer); 

var fourthQuestion = prompt('Am I nervous about this class?');
var sanitizedAnswer = fourthQuestion.toUpperCase().trim();
if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
    alert('yes!');
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
    alert('no!');
}
else {
    alert("Not a recognizable answer");
}
console.log('Nervous? ' + sanitizedAnswer); 

var fifthQuestion = prompt('Am I glad to be in this class?');
var sanitizedAnswer = fifthQuestion.toUpperCase().trim();
if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
    alert('yes!');
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
    alert('no!');
}
else {
    alert("Not a recognizable answer");
}
console.log('Glad to be here? ' + sanitizedAnswer); 



