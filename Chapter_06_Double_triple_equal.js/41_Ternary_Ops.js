let rajkumar_age = 18;
let raj_will_goa = rajkumar_age >= 18 ? "He will go goa" : "No Goa";
console.log(raj_will_goa);



let a = 10;
a += 10;
// a =-10;  doesn't exist


let actual_status_code = 200;
let expected_status_code = 200;
let testResult = actual_status_code === expected_status_code ? "Pass" : "fail";
console.log(testResult);


let environment = "staging";
let base_url = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(base_url);


let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("launching browser in", browserMode, "mode");


let responseTime = 850;  //ms
let sla = 1000; //ms
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA breached";
console.log('Response: ${responseTime}ms -${slaStatus}');

let condition = true;
let isSRk = condition ? true : false;
console.log(isSRk);

//Nested Ternary


let age = 26;
let is_pramod_age = age > 26 ? "'Yes', he will go to Goa" : "else he will not go to goa";
console.log(is_pramod_age);


let age_pramod = 35;
let is_pramod_will_go_Goa = age_pramod > 18 ? (age_pramod > 26 ? "He will drink" : "He will not drink") : "No Goa";
console.log(is_pramod_will_go_Goa);




let statusCode = 404;
let category = statusCode < 300 ? "success" :
    statusCode < 400 ? "Redirect" :
        statusCode < 500 ? "Client Error" : "Server Error";
console.log('Status ${statusCode}: $(category)');


let temp = 45;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "warm" :
            (temp >= 10) ? "cool" : "cold";
console.log("7.Temparature:", temp, "|Feel:", feel);
























