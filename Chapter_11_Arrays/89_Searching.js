let results = ["pass", "fail", "pass", "error", "fail"];


///indexof return - returns first index or -1 if not found

results.indexOf("fail"); //1  -index
results.indexOf("skip"); //-1 -index

//last Index -search from the end
results.lastIndexOf("fail"); //4


//includes - return boolean value

results.includes("pass");  // true
results.includes("skip"); //false


// find - returns first matching element
let num = [10, 25, 30, 45];
num.find(x => x > 20);  /// 25
console.log(num);


//findIndex
num.findIndex(n => n > 20); //1,2,3;

num.findLast(n => n > 20); //45;
num.lastIndexOf(n => n > 20); //3











