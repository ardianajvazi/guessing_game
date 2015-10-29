//var answer1 = document.getElementById('answer1');
//var answer2 = document.getElementById('answer2');
//var answer3 = document.getElementById('answer3');


alert("let's play a game!");

var userGuess = prompt('Is Albanian my first language?').toLowerCase();
 score = 0;

//console.log(userGuess + ', is the right answer'); put before if/else

  if (userGuess === 'yes'|| userGuess ==='y') {
    //answer1.innerHTML = ('Albanian is my first language. Good guess!');
    alert('Albanian is my first language. Good guess!');
    console.log(userGuess + ', is the right answer');
    score +=1
  }
  else {
    //answer1.innerHTML = ('Sorry, Albanian is my first language!');
    alert('Sorry, Albanian is my first language!');
    console.log(userGuess + ', is the wrong answer');
  }

var userGuess2 = prompt('Do I have any pets?').toLowerCase();

  if (userGuess2 === 'no'|| userGuess2 ==='n') {
    //answer2.innerHTML = ('Correct! I dont have any pets.');
    alert('Correct! I dont have any pets.');
    console.log(userGuess2  + ', is the right answer');
    score +=1
  }
  else {
    //answer2.innerHTML = ("Unfortuately I don't have any pets");
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

var userGuess4 = parseInt(prompt('How many sisters do I have?'));

  if (userGuess4 === 2) {
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

var userGuess6 = parseInt(prompt("Now lets make it a little harder. Guess my favorite number between 1-10 What's your guess?"));

var tries = 1;

if (userGuess6 === 7) {
  alert('You got it on your first try');
  console.log(userGuess6 + ', is the correct answer');
} else {

  while (userGuess6 !== 7) {
    if (userGuess6 > 7){
      userGuess6 = parseInt(prompt(userGuess6 + " is not right... try a lower number!"));
      console.log(userGuess6 + ', is the wrong answer');
      tries +=1
    } else if (userGuess6 < 7) {
        userGuess6 = parseInt(prompt(userGuess6 + " is wrong!! try a bigger number"));
        console.log(userGuess6 + ', is the wrong answer');
        tries +=1
    }

  }
alert('You guessed my number in ' + tries + ' tries congrats!');
alert(userGuess6 + " is my favorite number. Good guess!");
console.log(userGuess6 + ', Is the correct answer.');
};

alert('Time for a laugh.... What did the fish say when he hit a concrete wall?');
alert('Dam!')
