console.log(score);
let score = 10;

//ReferenceError: Cannot access 'score' before initialization


{
    // --- TDZ for "score" starts here---------
    // console.log(score);       //reference error
    //score=50;                 //reference error
    //type of score             //Reference error
    // ---- TDZ for "score" ends here
    let score = 100;            //declaration reach, tdz ends here
    console.log(score);         // safe to access now





}