// if (statusCode>=200 && statusCode<=300)

//Normal function
function validStatuscode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}

let example = validStatuscode(250);
console.log(example);

//Function as expression

const ValidateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}

//function as arrow 

const validateStatuscode_fun = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }

}


