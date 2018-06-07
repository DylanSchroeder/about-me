'use strict';
var questionsRight = 0;
var promptWarning = 'Incorrect';
function question1(){
  var firstQuestion = prompt('Am I from Earth?');
  var sanitizedAnswer = firstQuestion.toUpperCase().trim();
  if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
      alert('Of course I am!');
      questionsRight ++;
  }
  else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
      alert('Who are you and where did you get that info?');
  }
  else {
      alert("Not a recognizable answer");
  }
  console.log('Earth? ' + sanitizedAnswer); 
};
function question2(){
    var secondQuestion = prompt('Am I female?');
    var sanitizedAnswer = secondQuestion.toUpperCase().trim();
    if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
      alert('Although I am not female, I take no offense. The best poeple I know are all women');
    }
    else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
      alert('You are right, I am not a female');
      questionsRight ++;
    }
    else {
      alert("Not a recognizable answer");
    }
    console.log('Female? ' + sanitizedAnswer); 
};
function question3(){
    var thirdQuestion = prompt('Do I like animals?');
    var sanitizedAnswer = thirdQuestion.toUpperCase().trim();
    if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
       alert('Who would I be if the answer was no?');
      questionsRight ++;
    }
    else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
       alert('You could not be more wrong. I love animals!');
    }
    else {
        alert("Not a recognizable answer");
    }
    console.log('Like Animals ' + sanitizedAnswer); 
};
function question4(){
    var fourthQuestion = prompt('Am I nervous about this class?');
    var sanitizedAnswer = fourthQuestion.toUpperCase().trim();
    if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
       alert('Correct. I am very nervous');
        questionsRight ++;
    }
    else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
        alert('I wish I was not nervous but that is not the case.');
    }
    else {
       alert("Not a recognizable answer");
    }
    console.log('Nervous? ' + sanitizedAnswer); 
}
function question5(){
    var fifthQuestion = prompt('Am I glad to be in this class?');
    var sanitizedAnswer = fifthQuestion.toUpperCase().trim();
    if (sanitizedAnswer === 'Y' || sanitizedAnswer === "YES"){
        alert('Altough I am nervous, I am also excited about getting better at coding so yes is the right answer');
        questionsRight ++;
    }
    else if (sanitizedAnswer === 'N' || sanitizedAnswer === "NO"){
        alert('I regret to inform you that no is not the right answer here.');
    }
    else {
       alert("Not a recognizable answer");
    }
    console.log('Glad to be here? ' + sanitizedAnswer); 
}



//beginning of guessing game questions 6 & 7
function question6(){
    var guess = prompt('How many Fortnite wins do I have this week?');
    console.log('Guess is: ' + guess);
    var guessCount =1;

    while (guess !=='10' && guessCount < 4) {
        // what happens if cancel is hit
        if (guess === null) {
            console.log('User pressed the cancel button');
            // Escape the loop
            break;
        }

       if (guessCount < 4 ){
            if (guess > 10) {
               promptWarning = 'Too High!';
               guessCount ++;
           } else if (guess < 0) {
               promptWarning = 'Negative wins are not possible.';
               guessCount ++;
          } else {
               promptWarning = 'Too Low!';
               guessCount ++;
           }
        }
       console.log(promptWarning);

        guess = prompt(promptWarning +' Guess again: how many Fortnite wins do I have this week?');
        console.log('Guess is: ' + guess);
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
    } 
       if (guess == 10){
         alert('You took ' + guessCount + ' guesses to get it right.');
          questionsRight ++;
    }
       if(guessCount == 4){
          alert('You Suck!');
       }
    }
};

function question7(){
    var hero = ['BATMAN', 'SPIDERMAN', 'GREEN ARROW', 'GREEN LANTERN', 'IRON MAN']; 
    var heroAnswer = prompt('Can you guess any of my favorite super heroes?');
    var heroAnswerTrimmedToUpper = heroAnswer.toUpperCase().trim();
    var heroGuess = 0;
    while(hero.indexOf(heroAnswerTrimmedToUpper) < 0 && heroGuess < 5){
        console.log('HeroGuess: ' + heroGuess);
        if (heroGuess < 5) {
           promptWarning = ('Nope -');
           heroGuess ++;
       }
      heroAnswer = prompt(promptWarning + 'Try again: Can you guess any of my favorite super heroes?');
       heroAnswerTrimmedToUpper = heroAnswer.toUpperCase().trim();
    }
    if (hero.indexOf(heroAnswerTrimmedToUpper) >= 0) {
       alert('Yes! ' + heroAnswer + ' is one of my favorites!');
       questionsRight ++;
    }
    if(heroGuess == 5 && hero.indexOf(heroAnswerTrimmedToUpper) < 0){
       alert('You guessed wrong 6 times!');
    }
    alert('My favorite super heros are: '+ hero[0] + ', ' + hero[1] + ', ' + hero[2] + ', '+ hero[3] + ', '+ hero[4]);
    alert('You answered ' + questionsRight + '/7 correctly');
};
question1();
question2();
question3();
question4();
question5();
question6();
question7();