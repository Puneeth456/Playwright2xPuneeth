/*
  ===========================================
  null vs undefined in JavaScript
  ===========================================

  undefined
  ---------
  - It means a variable has been declared, but no value has been assigned to it yet.
  - JavaScript automatically gives "undefined" when you forget to set a value.
  - Type: undefined

  null
  ----
  - It means "empty" or "nothing".
  - It is intentionally assigned by the programmer to show that a variable should have no value.
  - Type: object  (This is a known bug/quirk in JavaScript)

  Simple way to remember:
  - undefined = JavaScript saying "I don't know the value yet"
  - null      = Programmer saying "I want this to be empty"
*/

// 1. undefined example
let myVariable;
console.log("Value:", myVariable);        // undefined
console.log("Type:", typeof myVariable);  // "undefined"

// 2. null example
let emptyBox = null;
console.log("Value:", emptyBox);           // null
console.log("Type:", typeof emptyBox);     // "object" (quirk in JS)

// 3. Checking equality
console.log("null == undefined:", null == undefined);   // true  (loose equality)
console.log("null === undefined:", null === undefined); // false (strict equality, types are different)

// 4. Real-life comparison
// undefined -> You have a box, but you haven't put anything inside it yet.
// null      -> You have a box, and you purposely left it empty.
