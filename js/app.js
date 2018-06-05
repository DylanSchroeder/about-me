'use strict';

var firstQuestion = prompt('Am I from Earth?');
var sanitizedAnswer = firstQuestion.toUpperCase().trim();
if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
    alert('Of course I am!');
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
    alert('Who are you and where did you get that info?');
}
else {
    alert("Not a recognizable answer");
}
console.log('Earth? ' + sanitizedAnswer); 

var secondQuestion = prompt('Am I female?');
var sanitizedAnswer = secondQuestion.toUpperCase().trim();
if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
    alert('Although I am not female, I take no offense. The best poeple I know are all women');
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
    alert('You are right, I am not a female');
}
else {
    alert("Not a recognizable answer");
}
console.log('Female? ' + sanitizedAnswer); 

var thirdQuestion = prompt('Do I like animals?');
var sanitizedAnswer = thirdQuestion.toUpperCase().trim();
if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
    alert('Who would I be if the answer was no');
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
    alert('You could not be more wrong. I love animals!');
}
else {
    alert("Not a recognizable answer");
}
console.log('Like Animals ' + sanitizedAnswer); 

var fourthQuestion = prompt('Am I nervous about this class?');
var sanitizedAnswer = fourthQuestion.toUpperCase().trim();
if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
    alert('Correct. I am very nervous');
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
    alert('I wish I was not nervous but that is not the case.');
}
else {
    alert("Not a recognizable answer");
}
console.log('Nervous? ' + sanitizedAnswer); 

var fifthQuestion = prompt('Am I glad to be in this class?');
var sanitizedAnswer = fifthQuestion.toUpperCase().trim();
if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
    alert('Altough I am nervous, I am also excited about getting better at coding so yes is the right answer');
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
    alert('I regret to inform you that no is not the right answer here.');
}
else {
    alert("Not a recognizable answer");
}
console.log('Glad to be here? ' + sanitizedAnswer); 



