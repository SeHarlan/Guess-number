export function compareNumbers(guess, correctNumber) {

    if (guess === correctNumber) {

        //winner
        return 0;

    } else if (guess < correctNumber) {

        //less than
        return -1;

    } else if (guess > correctNumber) {
        
        // greater than
        return 1;

    } else {
        console.log('not a number or math things went really wrong');
    }
    
}