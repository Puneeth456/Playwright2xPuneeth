let a = 10; //global scoep
console.log(a);

function printHello() {
    console.log("Hello theTesting Academy.com")
    let a = 20;  //local scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log("f->", a);

}

console.log("G-->", a);


printHello()