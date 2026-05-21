// ============================================================
// JavaScript Identifier Rules - Complete Examples
// ============================================================

console.log("=== JavaScript Identifier Rules Examples ===\n");


// Rule 1: Identifiers CAN start with $ (dollar sign)
console.log("Rule 1: Can start with $");
var $price = 5;
console.log("  $price =", $price);


// Rule 2: Identifiers CAN start with _ (underscore)
console.log("\nRule 2: Can start with _");
var _count = 10;
var _private = "hidden";
console.log("  _count =", _count);
console.log("  _private =", _private);


// Rule 3: Identifiers CAN start with a letter (a-z, A-Z)
console.log("\nRule 3: Can start with letters");
var name = "Pramod";
var Age = 25;
var x = 100;
console.log("  name =", name);
console.log("  Age =", Age);
console.log("  x =", x);


// Rule 4: Identifiers CANNOT be reserved keywords
console.log("\nRule 4: Cannot use reserved keywords as identifiers");
// INVALID (will cause SyntaxError if uncommented):
// var if = 10;
// var for = "loop";
// var let = 5;
// var class = "Math";
// var return = true;

console.log("  INVALID examples (commented out to prevent errors):");
console.log("    var if = 10;     // ERROR: 'if' is a keyword");
console.log("    var class = 'A'; // ERROR: 'class' is a keyword");
console.log("    var return = 1;  // ERROR: 'return' is a keyword");


// Rule 5: After the first character, numbers ARE allowed
console.log("\nRule 5: Can contain letters, digits, $, and _ after first char");
var ab123 = 80;
var userName1 = "John";
var _temp2 = "value";
var $total99 = 999;
console.log("  ab123 =", ab123);
console.log("  userName1 =", userName1);
console.log("  _temp2 =", _temp2);
console.log("  $total99 =", $total99);


// Rule 6: Identifiers CANNOT start with a number
console.log("\nRule 6: Cannot start with a number");
// INVALID (will cause SyntaxError if uncommented):
// var 123 = 190;
// var 1name = "test";
// var 99bugs = "found";

console.log("  INVALID examples (commented out to prevent errors):");
console.log("    var 123 = 190;    // ERROR: starts with number");
console.log("    var 1name = 'a';  // ERROR: starts with number");


// Rule 7: JavaScript identifiers are CASE-SENSITIVE
console.log("\nRule 7: Case-sensitive");
var name = "Puneeth";     // lowercase 'n'
var Name = "Pramod";      // uppercase 'N'
var NAME = "TestingAcademy"; // all uppercase

console.log("  name =", name);
console.log("  Name =", Name);
console.log("  NAME =", NAME);
console.log("  (These are THREE different variables!)");


// Rule 8: No spaces allowed in identifiers
console.log("\nRule 8: No spaces allowed");
// INVALID (will cause SyntaxError if uncommented):
// var puneeth bs = 123;
// var first name = "John";

console.log("  INVALID examples (commented out to prevent errors):");
console.log("    var puneeth bs = 123;   // ERROR: space not allowed");
console.log("    var first name = 'a';   // ERROR: space not allowed");

console.log("  VALID alternatives:");
var puneeth_bs = 123;     // Use underscore
var firstName = "John";   // Use camelCase
var first_name = "Jane";  // Use snake_case
console.log("    puneeth_bs =", puneeth_bs);
console.log("    firstName =", firstName);
console.log("    first_name =", first_name);


// Rule 9: Unicode characters ARE allowed
console.log("\nRule 9: Unicode characters are allowed");
var pramod1626 = 1028;     // Already valid ASCII
var प्रमोद = "Hindi Name";    // Unicode letters allowed
var 测试 = "Chinese";       // Unicode allowed
var αλφα = "Greek";         // Unicode allowed
console.log("  pramod1626 =", pramod1626);
console.log("  प्रमोद =", प्रमोद);
console.log("  测试 =", 测试);
console.log("  αλφα =", αλφα);


// Rule 10: Underscore can be used anywhere
console.log("\nRule 10: Underscore can be used anywhere");
var pramod_123 = 12333;
var user_name = "admin";
var _private_var = "secret";
var MAX_SIZE = 100;        // Common convention for constants
console.log("  pramod_123 =", pramod_123);
console.log("  user_name =", user_name);
console.log("  _private_var =", _private_var);
console.log("  MAX_SIZE =", MAX_SIZE);


// Rule 11: $ can be used anywhere (common in jQuery, Angular)
console.log("\nRule 11: $ can be used anywhere");
var pramod$123 = 1727;
var $element = "div";
var user$name = "test";
console.log("  pramod$123 =", pramod$123);
console.log("  $element =", $element);
console.log("  user$name =", user$name);


// ============================================================
// Summary of Valid vs Invalid Identifiers
// ============================================================

console.log("\n\n=== SUMMARY ===");
console.log("VALID identifiers:");
console.log("  myVar, _count, $price, name1, first_name, camelCaseName");
console.log("\nINVALID identifiers (will cause errors):");
console.log("  123name (starts with number)");
console.log("  my name (contains space)");
console.log("  my-name (hyphen not allowed - treated as minus operator)");
console.log("  if, for, let, class (reserved keywords)");
console.log("  @name, #hash (special chars not allowed)");

