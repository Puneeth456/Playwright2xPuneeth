//True
if ("Hello") console.log("String is truthy"); //"Hello"= Truthy

if (42) console.log("Number is truthy");

if ({}) console.log("Empty object is truthy");

if ([]) console.log("Empty array is truthy");


//false

if (" ") console.log("Wont Print");
if (null) console.log("Wont Print");
if (undefined) console.log("Wont Print");
if (NaN) console.log("Wont Print");
if (0) console.log("Wont Print");

let name = undefined;
if (name) {
    console.log("Hi");
}
else {
    console.log("Bye")
}



let name = 0;
if (name) {
    console.log("Hi");
}
else {
    console.log("Bye")
}

