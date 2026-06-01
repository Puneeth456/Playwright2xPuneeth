//Arrow function (ES6)

const greet = function (name) {
    return name;
}

let r = greet("Pramod");
console.log(r);


//
const greet2 = name => name;
let r2 = greet2("pramod");
console.log(r);


///
const doubleIt = n => n * 2;
console.log(doubleIt(10));

///
const printIt = name => console.log(name);
printIt("Dutta");



function add(a, b) {
    return a + b;
}

let sum = add(4, 5)
console.log(sum);


const add2 = (a, b) => a + b;
add2();


function say() {
    console.log("Hi");
}

const s1 = () => console.log('Hi');
s1();

const s2 = () => 'hi';
s2();


///If its a multiple line in the Arrow function;

const greet = name => {
    const message = 'hi' + name;
    return message;
}




