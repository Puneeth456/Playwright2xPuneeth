/// let - block scoped

let a = 10;


let retrycount = 0;
retrycount = retrycount + 1;
retrycount = retrycount + 1;
console.log("Retry attempt", retrycount);


//let retrycount = 5;  SyntaxError: Identifier 'retrycount' has already been declared

// X SyntaxError: Identifier 'retrycount' has already been declared



let teststatus = "pending"

if (teststatus === "pending") {
    let executiontime = 1200;
    console.log("Inside block:", executiontime);
}

console.log(executiontime) //ReferenceError: executiontime is not defined


// let = loyal
// var = variable/traitor





