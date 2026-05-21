// JS Engine
// Line by Line, JIT Compilation


console.log(greeting);
var greeting = "Hello";
console.log(greeting);


//Behind the scene:

//var greeting;        <-- hoisted with undefined
//console.log(greeting);      <-- Undefined
//greeting="Hello";           <---assignments stay in place
//console.log("greeting");    <---Hello




//var a            <--hoisted with undefind
console.log(a);
var a = "greeting";
console.log(a);




