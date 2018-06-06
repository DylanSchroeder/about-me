'use strict';

/*
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
*/

//beginning of guessing game
var guess = prompt('How many Fortnite wins do I have this week?');
console.log('Guess is: ' + guess);
var guessCount =1;

while (guess !=='10') {
    // what happens if cancel is hit
    if (guess === null) {
        console.log('User pressed the cancel button');
        // Escape the loop
        break;
    }

    var promptWarning = 'Incorrect';
    if (guess > 10) {
        promptWarning = 'Too High!'
    } else if (guess < 0) {
        promptWarning = 'Negative wins are not possible.';
    } else {
        promptWarning = 'Too Low!';
    }
    console.log(promptWarning);

    guess = prompt(promptWarning +' Guess again: how many Fortnite wins do I have this week?');
    console.log('Guess is: ' + guess);
    guessCount = guessCount + 1;
    console.log('guessCount is ' + guessCount);
    console.log('about to return to top of while loop');
}

console.log('done guessing (while loop is finished)');

if (guess === null) {
    alert('Come on. I have won 10 games this week!');
}   else {
    console.log('no cancel');

    if (guessCount === 1){
        alert('Awesome! Right on the first guess.');
    } else{
        alert('You took ' + guessCount + 'guesses to get it right.');
    }
}


