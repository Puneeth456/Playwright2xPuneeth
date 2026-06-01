//Higher Order function
//A function that takes a function as argument or return as function


function runwithLoggin(testfn, testName) {
    let result = testfn();
    return result;

}


function loginTest() {
    return "pass";
}


function loginTestFailed() {
    return "Fail";
}

runwithLoggin(loginTest, "Login Test");
runwithLoggin(loginTestFailed, "Dashboard Failed Test");
