var a = 10;//Global scope
console.log(a);


//Definition of the Function


function printHello() {
    console.log("Hello the TestingAcademy");
    var a = 30;  //local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); //30
    }
    console.log("f ->", a);
}

printHello()
