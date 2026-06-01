//Pure functions
//A pure functions always return the same output for the same input

function calculatePassrate(total, passed) {
    return ((passed / total) * 100).toFixed(2);

}

console.log(calculatePassrate(10, 7));
console.log(calculatePassrate(10, 7));

//Impure

function isPassing(score) {
    return score >= threshold;
}

let threshold = 80;
console.log(isPassing(threshold));

let threshold = 80;
console.log(isPassing(threshold));

