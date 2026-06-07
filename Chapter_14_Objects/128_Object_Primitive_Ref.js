//Prmitive & Reference types

let a = 10;
let b = a;
b = 99;
console.log(b);
console.log(a);


//Objects -Copied by reference, call by reference
//Reference - Objects, array function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);


