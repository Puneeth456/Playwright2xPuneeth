//Iterate - go from one to another

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}



// for of (cleanest for values)
for (test of tests) {
    console.log(test)
}


//With Indexation

tests.forEach((test, index) => {
    console.log(test, index);
});


//Index

let students = ["methis", "senthil", "ajay", "rahul"];
for (let student in students) {
    console.log(student, " ->", students[student]);

}

