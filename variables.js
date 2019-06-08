// you solution should be here
let birthYear = 1993;
let futureYear = 2040;

/**
 *
 * Solution Number 1
 * @param {*} birthYear
 * @param {*} futureYear
 */
function calculateFutureAge(birthYear, futureYear) {
    // the age variable here
    let age = futureYear - birthYear;
    console.log('I will be either ' + age + ' or ' + (age - 1))
} 
// calling the calculateFutureAge function
calculateFutureAge(birthYear, futureYear);



// Solution Number 2;

let age = 26;
let maxAge = 120;
let padDay = 4;

function calculateTotalNeeded(peyDay, maxAge, age) {
    let totalNeeded = (peyDay * 365) * (maxAge - age);
    console.log('You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge);
}

calculateTotalNeeded(peyDay, maxAge, age)






