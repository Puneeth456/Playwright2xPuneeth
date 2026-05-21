//Can't be assigned
const BASE_URL = "https://app.testingacademy.com";
BASE_URL = "https://courses.testingacademy.com";
//TypeError: Assignment to constant variable.

console.log(BASE_URL);



//Can't be re-declared
const BASE_URL = "https://app.testingacademy.com";
const BASE_URL = "https://courses.testingacademy.com";
//SyntaxError: Identifier 'BASE_URL' has already been declared

//function can be called multiple times but block should be executed again

function say() {
    let name = "Dutta"
}

say()
say()





