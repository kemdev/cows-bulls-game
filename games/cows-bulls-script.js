// Bulls and Cows

console.log('Welcome to the game of Bulls and Cows!');

//  user name input
// the welcome section id
let welcomeName = document.getElementById('welcomeName');

// username input section
let userNameSectionToHide = document.getElementById('userNameSection');
let userName = document.getElementById('userName');
let userNameButton = document.getElementById('submituserName');


// guess input
// guess section to show
let guessSection = document.getElementById('guessSection');
// guess input value
let guess = document.getElementById('guess');
// guess submit button
guessButton = document.getElementById('guessButton');
// textarea to show the guess input value
let textArea = document.getElementById('textArea');
// add the loading effect
let loading = document.getElementById('loading');
let circle = document.getElementById('circle');

// difficulity section;
let difficulitySection = document.getElementById('difficulitySection');
let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let difficulity = 0; // Easy = 1; Medium = 2; Hard = 3;
// function to select the difficulity

// remove the displayNone class from loading for 5 seconds and then add it back
function rotateLoading(_callback) {
    setTimeout(function() {

        loading.classList.add('displayNone')
        document.getElementsByClassName('display-name')[0].classList.remove('displayHidden');
        showDifficulity()
    }, 500);
    welcomeName.innerHTML = 'Welcome ' + userName.value;
    _callback
}

function chooseDifficulity() {
    hard.addEventListener('click', () => { manageDiff(3) })
    medium.addEventListener('click', () => { manageDiff(2) })
    easy.addEventListener('click', () => { manageDiff(1) })
}

function manageDiff(difficult) {

    // hideDifficulity()
    loading.classList.remove('displayNone');
    setTimeout(function() {
        loading.classList.add('displayNone')
        guessSection.classList.remove('displayNone');
    }, 500);
    hideDifficulity()
    difficulity = difficult
        // showReset()
}

function showDifficulity() {
    difficulitySection.classList.remove('displayNone');
}

function hideDifficulity() {
    difficulitySection.classList.add('displayNone');
}

// function reset() {
//     location.reload();
// }

// function showReset() {
//     let reset = document.getElementById('resetSection');
//     reset.classList.remove('displayNone');
// }
// function to check if the name input is a string of characters
function isStringOfCharacter(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// swap displayNone class between userName and guess
userNameButton.addEventListener('click', userNameEnterd);



// function to hide userNameSection and show guessSection
function userNameEnterd() {
    if (userName.value.length > 0 && isStringOfCharacter(userName.value)) {
        userNameSectionToHide.classList.add('displayNone');
        loading.classList.remove('displayNone');
        // chooseDifficulity()
        chooseDifficulity()
        rotateLoading()


    } else {
        alert('Please check your name!');
        userNameSectionToHide.classList.remove('displayNone');
        guessSection.classList.add('displayNone');
    }
}


guessButton.addEventListener('click', guessEnterd);

// the following is the limited attempt function.
// another difficulty level is to make it limited
// function test() {

//     if (textArea.value.length >= 270) {
//         alert("You've reached the limit of guesses!")
//     } else {
//         guessEnterd()
//     }
// }

// function to push the guess input value to the textarea
function guessEnterd() {

    if (!isNumber(guess.value)) {
        guess.value = '';
        return alert('Input must be a number!');
    }
    if (!isUnique(guess.value)) {
        guess.value = '';
        return alert('Numbers must be unique!');
    }
    checkguess(guess.value);
    guess.value = '';
}
// make a function to produce a 4 uinique random number
function randomNumber() {
    let result = [];
    let randomNumber = Math.floor(Math.random() * 10);
    // result.push(randomNumber);
    while (result.length < 4) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (result.indexOf(randomNumber) === -1) {
            result.push(randomNumber);
        }
    }
    return result;
}


console.log(randomNumber());


// function to check if the guess input value is a string of 4 unique numbers
function isNumber(str) {

    return /^[0-9]{4}$/.test(str);

}

function isUnique(str) {
    let unique = [];
    for (let i = 0; i < str.length; i++) {
        if (unique.indexOf(str[i]) === -1) {
            unique.push(str[i]);
        }
    }
    return unique.length === 4;
}

// check if the guess was correct and check numbers that cows or bulls
let randomNumberArray = randomNumber();

function checkguess(guess) {

    let bullsNumber = document.getElementById('bullsNumber');
    let cowsNumber = document.getElementById('cowsNumber');
    let cows = 0;
    let bulls = 0;
    let guessArray = guess.split('');
    console.log(randomNumberArray);
    for (let i = 0; i < guessArray.length; i++) {
        if (guessArray[i] == randomNumberArray[i]) {
            bulls++;

        }
    }

    for (let i = 0; i < guessArray.length; i++) {
        for (let j = 0; j < randomNumberArray.length; j++) {
            if (guessArray[i] == randomNumberArray[j] && guessArray[i] != randomNumberArray[i]) {
                cows++;

            }
        }
    }
    textArea.innerHTML += guess + '     ';
    bullsNumber.innerHTML = bulls;
    cowsNumber.innerHTML = cows;
    if (bulls == 4) {
        // alert('You win!');
        win();
    }
    return [bulls, cows];
}


function win() {
    let win = document.getElementById('win');
    let display = document.getElementById('display');
    let winButton = document.getElementById('winButton');
    display.classList.add('displayNone');
    win.classList.remove('displayNone');
    welcomeName.innerHTML = '<h1 style="color: green; font-weight: bolder">' + 'You win ' + userName.value + '</p>';

}




// style the hover of the header

// make the image to move slightly when the mouse is over the heade
let sun = document.getElementById('sun');
let bigRoll = document.getElementById('roll-big');
let smallRoll = document.getElementById('roll-small');
header.addEventListener('mouseover', () => {
    sun.style.transform = 'translateX(-1000px)';
    sun.style.transition = 'all 25s ease';
    bigRoll.style.transform = 'translate(-100px, -25px)';
    bigRoll.style.transition = 'all 7s cubic-bezier(0.52, -0.02, 0, 1.19) 0s';
    smallRoll.style.transform = 'translate(-10px, -25px)';
    smallRoll.style.transition = 'all 5s ease';

})

header.addEventListener('mouseout', () => {
    sun.style.transform = 'translate(0px, 0px)';
    sun.style.transition = 'all 20s ease';
    bigRoll.style.transform = 'translate(0px, 0px)';
    // bigRoll.style.transition = 'all 10s ease';
    smallRoll.style.transform = 'translate(0px, 0px)';
})