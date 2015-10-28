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
    alert('all done!! your final score is ' + score + ' out of 2');

var userGuess3 = prompt("Now lets make it a little harder. Guess my favorite number between 1-10 What's your guess?");

var guess3 = '7';

var tries = 1;

if (userGuess3 === guess3) {
  alert('You got it on your first try');
  console.log(userGuess3 + ', is the correct answer');
} else {

  while (userGuess3 !== guess3) {
    if (userGuess3 > guess3){
      userGuess3 = prompt(userGuess3 + " is not right... try a lower number!");
      console.log(userGuess3 + ', is the wrong answer');
      tries +=1
    } else if (userGuess3 < guess3) {
        userGuess3 = prompt(userGuess3 + " is wrong!! try a bigger number");
        console.log(userGuess3 + ', is the wrong answer');
        tries +=1
    }

  }
  alert('You guessed my number in ' + tries + ' tries congrats!');
  alert(userGuess3 + " is my favorite number. Good guess!");
  console.log(userGuess3 + ', Is the correct answer.');
};
