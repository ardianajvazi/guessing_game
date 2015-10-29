alert("let's play a game!");

var userGuess = prompt('Is Albanian my first language?').toLowerCase();
 score = 0;

  if (userGuess === 'yes'|| userGuess ==='y') {
    alert('Albanian is my first language. Good guess!');
    console.log(userGuess + ', is the right answer');
    score +=1
  }
  else {
    alert('Sorry, Albanian is my first language!');
    console.log(userGuess + ', is the wrong answer');
  }

var userGuess2 = prompt('Do I have any pets?').toLowerCase();

  if (userGuess2 === 'no'|| userGuess2 ==='n') {
    alert('Correct! I dont have any pets.');
    console.log(userGuess2  + ', is the right answer');
    score +=1
  }
  else {
    alert("Unfortuately I don't have any pets");
    console.log(userGuess2 + ', is the wrong answer');
  }

var userGuess3 = prompt('Is soccer my favorite sport?').toLowerCase();

  if (userGuess3 === 'yes'|| userGuess3 ==='y') {
    alert('Good guess!');
    console.log(userGuess3 + ', is the right answer');
    score +=1
  }
  else {
    alert('Sorry, Soccer is my favorite sport');
    console.log(userGuess3 + ', is the wrong answer');
  }

var userGuess4 = prompt('How many sisters do I have?');

  if (userGuess4 === '2') {
    alert('Good guess!');
    console.log(userGuess4 + ', is the right answer');
    score +=1
  }
  else {
    alert('Sorry, I have 2 sisters');
    console.log(userGuess4 + ', is the wrong answer');
  }

var userGuess5 = prompt('Am I the oldest child in my family?').toLowerCase();

  if (userGuess5 === "yes" || userGuess5 ==='y') {
    alert("Good guess! I'm the oldest!");
    console.log(userGuess5 + ', is the right answer');
    score +=1
  }
  else {
    alert('Wrong, Im the oldest one');
    console.log(userGuess5 + ', is the wrong answer');
  }

alert('all done!! your final score is ' + score + ' out of 5');

var userGuess6 = prompt("Now lets make it a little harder. Guess my favorite number between 1-10 What's your guess?");

var guess6 = '7';

var tries = 1;

if (userGuess6 === guess6) {
  alert('You got it on your first try');
  console.log(userGuess6 + ', is the correct answer');
} else {

  while (userGuess6 !== guess6) {
    if (userGuess6 > guess6){
      userGuess6 = prompt(userGuess6 + " is not right... try a lower number!");
      console.log(userGuess6 + ', is the wrong answer');
      tries +=1
    } else if (userGuess6 < guess6) {
        userGuess3 = prompt(userGuess6 + " is wrong!! try a bigger number");
        console.log(userGuess6 + ', is the wrong answer');
        tries +=1
    }

  }
  alert('You guessed my number in ' + tries + ' tries congrats!');
  alert(userGuess3 + " is my favorite number. Good guess!");
  console.log(userGuess3 + ', Is the correct answer.');
};

alert('Time for a laugh.... What did the fish say when he hit a concrete wall?');
alert('Dam!   hahahaha!')
