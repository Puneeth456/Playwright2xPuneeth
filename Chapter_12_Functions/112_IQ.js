let g_x = 10;

//Nested scope| blocked scope
//Outer can be accessed inside the function but viceversa it can't be use


function outer() {
    let x = 10;

    function inner() {

        let y = 20;
        console.log(x);

        inner();
        console.log(y);


    }



}

