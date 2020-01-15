import compareNumbers from './compare.js';

const input = document.getElementById('number-input');
const button = document.getElementById('submit-button');
const triesRemaining = document.getElementById('tries-remaining');
const guessWas = document.getElementById('guess-was');
const winLose = document.getElementById('win-lose');


//random number
const correctNumber = Math.ceil(Math.random() * 20);

let remainCount = 4;

function submit() {
    //gets value from string field and converts to number
    const userGuess = Number(input.value);

    const newResults = compareNumbers(userGuess, correctNumber);

    if (newResults === 0) {
        //winning code
    } else if (newResults === -1) {
        //guess too low code
    } else if (newResults === 1) {
        //guess too high code
    } else {
        //error code
    }



} 

button.addEventListener('click', submit);

