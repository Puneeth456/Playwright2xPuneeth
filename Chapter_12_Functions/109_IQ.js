//Return as value

function getStatus(code) {
    if (code >= 200 && code <= 300) return "success";
    if (code >= 400 && code <= 500) return "client error";
    if (code >= 500) return "server error";
}

let x = getStatus(200);
console.log(x);

///

function logTest(name) {
    console.log(`running: ${name}`);
    //no return statement
}

let result = logTest("login");
console.log(result);


//


greet("Allice");

function greet(name) {
    return `hello, ${name}!`;
}


// It is TDZ
sayHi("Bob");

const sayHi = function (name) {
    return `Hi, $ {name}!`;
}


