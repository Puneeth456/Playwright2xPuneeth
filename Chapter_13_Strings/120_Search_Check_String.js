//Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";



//includes
let url = "https://staging.vwo.com/api/login?retry=true";
console.log(url.includes("staging"));
console.log(url.includes("Productoon"));


//startswith & endswith
let url = "https://staging.vwo.com/api/login?retry=true";
console.log(url.startsWith("https"));
console.log(url.startsWith("http://"));
console.log(url.endsWith("true"));



//IndexOf
let url = "https://staging.vwo.com/api/login?retry=true";
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.lastIndexOf("nothere"));
console.log(url.indexOf("X"));


//
let url = "https://staging.vwo.com/api/login?retry=true";
console.log(url.search(/login/));
console.log(url.search(/vwo/));

























