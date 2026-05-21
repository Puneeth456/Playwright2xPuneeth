//# let is blocked scoped


let x = "global";

if (true) {
    // TDZ for block-scoped "x" starts here
    // console.log(x);           //Reference not global scope
    let x = "block";               // TDZ ends here
    console.log(x);             // block  

}

console.log(x)


