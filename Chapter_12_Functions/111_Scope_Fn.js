//Scope in Functions


let env = "staging"; // global scope


function setupConfig() {
    let timeout = 3000;
    console.log(env);   //global
    console.log(timeout); //local

}

setupConfig();
console.log(env);
console.log(timeout);

///can't use the local variable outside the function
