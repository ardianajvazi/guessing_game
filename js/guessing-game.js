var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');
var ans6 = document.getElementById('answer6');


alert("let's play a game!");

var score;
var tries;

function firstQuestion() {

var userGuess = prompt('Is Albanian my first language?').toLowerCase();
 score = 0;

  if (userGuess === 'yes'|| userGuess ==='y') {
    ans1.innerHTML = 'Albanian is my first language. Good guess!' + '<br> <img width = "200px" src = "img/albanian_flag.png">';
    ans1.className = "green";
    console.log(userGuess + ', is the right answer');
    score +=1
  }
  else {
    ans1.innerHTML = ('Sorry, Albanian is my first language!');
    ans1.className = "red";
    console.log(userGuess + ', is the wrong answer');
  }
}

function secondQuestion() {

var userGuess2 = prompt('Do I have any pets?').toLowerCase();

  if (userGuess2 === 'no'|| userGuess2 ==='n') {
    ans2.innerHTML = 'Correct! I dont have any pets.' + '<br> <img width = "200px" src = "img/no_pets.jpg">';
    ans2.className = "green";
    console.log(userGuess2  + ', is the right answer');
    score +=1
  }
  else {
    ans2.innerHTML = ("Unfortuately I don't have any pets");
    ans2.className = "red";
    console.log(userGuess2 + ', is the wrong answer');
  }
}

function thirdQuestion() {

var userGuess3 = prompt('Is soccer my favorite sport?').toLowerCase();

  if (userGuess3 === 'yes'|| userGuess3 ==='y') {
    ans3.innerHTML = 'Good guess!' + '<br> <img width = "200px" src = "img/soccerball.jpg">';
    ans3.className = "green";
    console.log(userGuess3 + ', is the right answer');
    score +=1
  }
  else {
    ans3.innerHTML = ('Sorry, Soccer is my favorite sport');
    ans3.className = "red";
    console.log(userGuess3 + ', is the wrong answer');
  }
}

function fourthQuestion() {

var userGuess4 = parseInt(prompt('How many sisters do I have?'));

  if (userGuess4 === 2) {
    ans4.innerHTML = 'Good guess!' + '<br> <img width = "200px" src = "img/number_2.png">';
    ans4.className = "green";
    console.log(userGuess4 + ', is the right answer');
    score +=1
  }
  else {
    ans4.innerHTML = ('Sorry, I have 2 sisters');
    ans4.className = "red";
    console.log(userGuess4 + ', is the wrong answer');
  }
}

function fifthQuestion() {

var userGuess5 = prompt('Am I the oldest child in my family?').toLowerCase();

  if (userGuess5 === "yes" || userGuess5 ==='y') {
    ans5.innerHTML = "Good guess! I'm the oldest!" + '<br> <img width = "200px" src = "img/yes.jpg">';
    ans5.className = "green";
    console.log(userGuess5 + ', is the right answer');
    score +=1
  }
  else {
    ans5.innerHTML = ('Wrong, Im the oldest one');
    ans5.className = "red";
    console.log(userGuess5 + ', is the wrong answer');
  }
  alert('all done!! your final score is ' + score + ' out of 5');
}


function sixthQuestion() {

var userGuess6 = parseInt(prompt("Now lets make it a little harder. Guess my favorite number between 1-10 What's your guess?"));

  tries = 1;

  if (userGuess6 === 7) {
    ans6.innerHTML = 'You got it on your first try' + '<br> <img width = "200px" src = "img/number-7.jpg">';
    ans6.className = "green";
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
    ans6.innerHTML = 'You guessed my number in ' + tries + ' tries congrats!' + '<br> <img width = "200px" src = "img/number-7.jpg">';;
    ans6.className = "green";
  }
console.log(userGuess6 + ', Is the correct answer.');
}

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();

alert('Time for a laugh.... What did the fish say when he hit a concrete wall?');
alert('Dam!')


