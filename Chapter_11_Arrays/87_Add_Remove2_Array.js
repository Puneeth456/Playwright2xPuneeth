let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

//splice
let arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 1);
console.log(arr);


let arr = [1, 2, 4, 5, 6];
console.log(arr)
arr.splice(2, 0, 99);//add
console.log(arr);



arr = [1, 2, 99, 4, 5, 6];
arr.splice(2, 1, 100); //replace
console.log(arr);

arr = [1, 2, 100, 4, 5, 6];
arr.splice(1, 2, 10, 20);
console.log(arr);









