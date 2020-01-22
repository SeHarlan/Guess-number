// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;
import { compareNumbers } from '../compare.js';

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNum = 10;
    //Act 
    // Call the function you're testing and set the result to a const

    const result1 = compareNumbers(3, correctNum);
    assert.equal(result1, -1);

    const result2 = compareNumbers(15, correctNum);
    assert.equal(result2, 1);

    const result3 = compareNumbers(10, correctNum);
    assert.equal(result3, 0);
    


    //Assert
    // Make assertions about what is expected valid result
    
});
