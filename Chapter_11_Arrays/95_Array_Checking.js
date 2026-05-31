//checking Array

//check if something is an array

let result = Array.isArray([1, 2, 3]);
console.log(result);
let result1 = Array.isArray("a"); //[]
console.log(result1);

//every & some

[80, 90, 85].every(s => s >= 70);

//Playwright API
[200, 201, 202].every(statuscode => statuscode >= 200);


//some - at least one must pass
[80, 60, 85].some(s => s < 70); //true
[80, 90, 85].some(s => s < 70); //false


//arrow : s=> s >=70;



