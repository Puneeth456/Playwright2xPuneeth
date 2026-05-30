let scores = [45, 82, 91, 60, 73];

//map - transform the every element , return to new arrays
// map will return the same number of elements that u have but based on the condition there value will be changed

let grades = scores.map(s => s > 70 ? "pass" : "fail");
console.log(grades);


//filter - keeps elements that pass a test
let scores = [45, 82, 91, 60, 73];
let passing = scores.filter(s => s > 70);
console.log(passing);



//reduce  -- accumulates to the single value
let scores = [45, 82, 91, 60, 73];
let total = scores.reduce((sum, s) => sum + s, 0);
console.log(total);


// flat
let nested = [[1, 2], [3, 4], [5, 6]];
console.log(nested.flat());
