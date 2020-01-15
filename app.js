import compareNumbers from './compare.js';

const input = document.getElementById('number-input');
const button = document.getElementById('submit-button');
const triesRemaining = document.getElementById('tries-remaining');
const guessWas = document.getElementById('guess-was');
const winLose = document.getElementById('win-lose');
const mainBody = document.getElementById('main-body');
const resultsSection = document.getElementById('results-section');
const resetButton = document.getElementById('reset');

//random number generator from MDN
const correctNumber = Math.ceil(Math.random() * 20);
console.log(correctNumber);

let remainCount = 4;


function submit() {
    //testing for blank field
    if (input.value === '') {
        alert('enter a number');
        return;
    }
    //gets value from string field and converts to number
    const userGuess = Number(input.value);

    //testing for number over 20
    if (userGuess > 20) {
        alert('enter a number below 21');
        return;
    }

    const newResults = compareNumbers(userGuess, correctNumber);

    function youWon() {
        mainBody.style.display = 'none';
        winLose.textContent = 'Congrats, You Got It!';
        resultsSection.style.opacity = '1';
    }

    function youLost() {
        mainBody.style.display = 'none';
        winLose.textContent = 'You have failed!';
        resultsSection.style.opacity = '1';
    }

    function reduceCount() {
        remainCount--;
        if (remainCount <= 0) {
            youLost();
            //fully lost code
        } 
    }

    function displayResults(lowOrHi) {
        triesRemaining.textContent = (`${remainCount} tries remaining.`);
        guessWas.textContent = `Your guess was too ${lowOrHi}.`;
    }



    if (newResults === 0) {
        youWon();
        //winning code
    
    } else if (newResults === -1) {
        reduceCount();
        displayResults('low');
        //guess too low code

    } else if (newResults === 1) {
        reduceCount();
        displayResults('hi');
        //guess too high code

    } else {
        throw new Error('results inconclusive');
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

