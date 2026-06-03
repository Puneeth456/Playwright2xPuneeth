let str = "Hello, world! ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());


let msg = "Test: Fail. retry:Fail.";
console.log(msg.replaceAll("Fail", "Pass"));


//Concatenation
"Hello" + "" + "world";
"Hello".concat("", "world");


let r = "pass,fail,skip".split(",");
console.log(r);

//
let parts = ["2023", "03", "08"];
let date = parts.join("-");
console.log(date);

