//Objects
//Key and value pair

let student1 = { name: "Pramod", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: "90", ph_no: 937373737 };


//Key will not be in double quotes
//below key is in actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone_no": 98727276 };


let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

let a1 = { status: "Pass" };
console.log(a1.status);
console.log(a1["status"]);

let b = a;
b.status = "fail";
console.log(a.status);
console.log(b.status);



if (b === a) {
    console.log("true");
} else {
    console.log("false");
}

