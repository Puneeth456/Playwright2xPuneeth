//Question 1 — HTTP Status Code Categorizer

// Problem: Given an HTTP status code, print which category it belongs to.
// 200–299 → Success
// 300–399 → Redirection
// 400–499 → Client Error
// 500–599 → Server Error
// Anything else → Invalid



let http = 604;

if (http >= 200 && http <= 299) {
    console.log("Succes");
} else if (http >= 300 && http <= 399) {
    console.log("Redirection");
} else if (http >= 400 && http <= 499) {
    console.log("Client Error");
} else if (http >= 500 && http <= 599) {
    console.log("Server Error");
} else {
    console.log("Invalid");
}

//Question 2 — Test Case Pass/Fail Verdict
// Problem: Compare actual result with expected result and print test verdict.

// expected = "Login Successful"
// actual   = "Login Successful"
// Output: ✅ Test Passed

// expected = "Login Successful"
// actual   = "Invalid Credentials"
// Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials


let expected = "Login Successful";
let actual = "Login Successful";
if (expected === actual) {
    console.log(" ✅ Test Passed");
} else {
    console.log(" Test failed");
}

let expected = "Login Successful";
let actual = "Invalid Credentials";
if (expected === actual) {
    console.log("Test Passed");
} else {
    console.log(" ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials");
}

// Question 3 — Bug Severity Classifier

// Problem: Given a bug's impact score (1–10), classify the severity.
// 9–10 → Critical(block release)
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low
// Anything else → Invalid score

let bug = 5;

if (bug >= 9 && bug <= 10) {
    console.log("Critical (block release)");
} else if (bug >= 7 && bug <= 8) {
    console.log("High");
} else if (bug >= 4 && bug <= 6) {
    console.log("Medium");
} else if (bug >= 1 && bug <= 3) {
    console.log("Low");
} else {
    console.log("Invalid score");
}


// Question 4 — Build Health Reporter
// Problem: Given the percentage of test cases passed in a CI build, report build health.
// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)

let health = 101;

if (health === 100) {
    console.log("Green Build");
} else if (health >= 90 && health <= 99) {
    console.log("Stable (investigate failures");
} else if (health >= 70 && health <= 89) {
    console.log("Unstable");
} else {
    console.log("Broaken Build (block deployment)");
}

