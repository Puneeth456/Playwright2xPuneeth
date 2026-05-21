var a = 10;  ///Global scope




//var is function scoped

console.log(a);  ///Global scope

function printHello() {
    console.log("Hello ThetestingAcademy");
    var a = 20; //local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }

}

var a = 40;
console.log(a);

printHello()




