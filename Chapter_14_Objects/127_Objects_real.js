let config = {};
config.browser = "chrome";
config.timeout = 3000;
config.testname = "Login Test";

console.log(config);

if (config.browser === "chrome") {
    console.log("I will execute my tc");
}


delete config.browser
console.log(config);


//////////2nd way of the representation

let config2 = {
    browser="chrome",
    timeout=3000,
    testname="login test"
};



