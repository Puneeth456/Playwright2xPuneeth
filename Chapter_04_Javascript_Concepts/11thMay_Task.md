///Difference between var, Let, Const 

var is the old way to declare variables, and it can cause scope-related bugs because it ignores block scope. let is better for values that may change, while const is best when you do not want the variable to be reassigned.

A simple rule is: use const by default, and use let only when you need to change the value.
---------------------------------------------------
//// what is Hoisting in Javascript

Hoisting in JavaScript is the behavior where declarations seem to be moved to the top of their scope before code runs, so functions and some variables can be referenced earlier than where they are written.

---------------------------------------------------------
///Can we change the value of a const variable? Explain with an example.

No, you cannot reassign a const variable after it is declared. If you try, JavaScript throws an error like TypeError: Assignment to constant variable.

Example
javascript
const age = 25;
age = 30;   // Error
-----------------------------------------

//What is the difference between function scope and block scope? How does it relate to var vs let/const?

Function scope means a variable is accessible anywhere inside the function where it was declared. Block scope means a variable is accessible only inside the nearest pair of curly braces { }, such as in an if, for, or while block.

-------------------------------------------------

//
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

Output 3,3,3

   for (let j = 0; j < 3; j++) {
     setTimeout(() => console.log(j), 100);
   }

Output 3,3,3

