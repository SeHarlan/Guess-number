import compareNumbers from './compare.js';

const input = document.getElementById('number-input');
const button = document.getElementById('submit-button');
const triesRemaining = document.getElementById('tries-remaining');
const guessWas = document.getElementById('guess-was');
const winLose = document.getElementById('win-lose');
const mainBody = document.getElementById('main-body');
const resultsSection = document.getElementById('results-section');
const resetButton = document.getElementById('reset');

//random number
const correctNumber = Math.ceil(Math.random() * 20);
console.log(correctNumber);

let remainCount = 4;

function submit() {
    
    //gets value from string field and converts to number
    const userGuess = Number(input.value);

    const newResults = compareNumbers(userGuess, correctNumber);

    function reduceCount() {
        remainCount--;
        if (remainCount <= 0) {
            mainBody.style.display = 'none';
            winLose.textContent = 'You have failed!';
            resultsSection.style.opacity = '1';
            //fully lost code
        } 
    }


    if (newResults === 0) {
        mainBody.style.display = 'none';
        winLose.textContent = 'You got it!';
        resultsSection.style.opacity = '1';
        //winning code
    
    } else if (newResults === -1) {
        reduceCount();
        triesRemaining.textContent = (`${remainCount} tries remaining.`);
        guessWas.textContent = 'Your guess was too low.';
        //guess too low code

    } else if (newResults === 1) {

        reduceCount();
        triesRemaining.textContent = (`${remainCount} tries remaining.`);
        guessWas.textContent = 'Your guess was too hi.';
        //guess too high code

    } else {
        //error code
    }



} 
button.addEventListener('click', submit);


const resetPage = () => {
    const userChoice = window.confirm('Are you sure???');

    if (userChoice === true) {
        document.location.reload();
    } else {
        return false;
    }
};
resetButton.addEventListener('click', resetPage);

