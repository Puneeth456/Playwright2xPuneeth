///Palindrome sequence


let s = "Madam";

let reverse = "";

let s1 = s.toLowerCase();
console.log(s1);


for (let i = s1.length - 1; i >= 0; i--) {
    reverse = reverse + s1.charAt(i);
}

if (reverse === s1) {
    console.log(`${s} is palindrome`);
} else {
    console.log(`${s} is not a palindrome`);
}



///Anagram Program

let str1 = "Eat";
let str2 = "Tea";

const a = str1.toLowerCase().split("").sort().join();
const b = str2.toLowerCase().split("").sort().join();
console.log(b);
console.log(a);


if (a === b) {

    console.log(str1 + " & " + str2 + " -> Anagram");
} else {
    console.log(str1 + " & " + str2 + " -> Not Anagram");
}

