var v = 10;
let l = 20;
const c = 30;

console.log(v);
console.log(l);
console.log(c);


var browser = "chrome";
var browser = "firefox";  ////redeclation allowed
browser = "edge";  //reassigned allowed


// for, function

var testcases = ["login", "logout", "signup"];

for (var i = 0; i < testcases.length; i++) {
    console.log("Running test:", testcases[i]);
}

console.log("Loop counter leaked outside:", i);

///function

function say() {
    console.log("Hello");
}


say()
say()
say()






