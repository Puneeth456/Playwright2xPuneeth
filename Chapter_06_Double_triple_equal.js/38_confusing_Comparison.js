/**
 * ============================================================
 * Lab Exercise: 38_confusing_Comparison.js
 * Topic: == (Loose Equality) vs === (Strict Equality)
 * ============================================================
 *
 * Rule of Thumb:
 * - ==  : Compares values AFTER converting them to the same type (coercion).
 * - === : Compares values AND types. No conversion happens.
 *
 * Best Practice: Always use === to avoid unexpected results.
 */

console.log("=== 1. Number vs String ===");
console.log("5 == '5':", 5 == '5');     // true  -> string '5' becomes number 5
console.log("5 === '5':", 5 === '5');   // false -> different types (number vs string)

console.log("\n=== 2. Number vs Boolean ===");
console.log("1 == true:", 1 == true);    // true  -> true becomes 1
console.log("1 === true:", 1 === true);  // false -> different types (number vs boolean)
console.log("0 == false:", 0 == false);  // true  -> false becomes 0
console.log("0 === false:", 0 === false);// false -> different types

console.log("\n=== 3. null vs undefined ===");
console.log("null == undefined:", null == undefined);   // true  -> special JS rule
console.log("null === undefined:", null === undefined); // false -> different types

console.log("\n=== 4. Empty String vs Zero / false ===");
console.log("'' == 0:", '' == 0);       // true  -> '' becomes 0
console.log("'' === 0:", '' === 0);     // false -> different types
console.log("'' == false:", '' == false);  // true
console.log("'' === false:", '' === false);// false

console.log("\n=== 5. String '0' vs Number 0 ===");
console.log("'0' == 0:", '0' == 0);     // true  -> '0' becomes number 0
console.log("'0' === 0:", '0' === 0);   // false -> different types

console.log("\n=== 6. null vs Zero ===");
console.log("null == 0:", null == 0);   // false -> null does NOT convert to 0 with ==
console.log("null === 0:", null === 0); // false -> different types

console.log("\n=== 7. undefined vs Zero ===");
console.log("undefined == 0:", undefined == 0);   // false
console.log("undefined === 0:", undefined === 0); // false

console.log("\n=== 8. NaN Comparisons (Always false!) ===");
console.log("NaN == NaN:", NaN == NaN);     // false
console.log("NaN === NaN:", NaN === NaN);   // false
console.log("NaN == 0:", NaN == 0);         // false
console.log("NaN === 0:", NaN === 0);       // false

console.log("\n=== 9. Array vs String ===");
console.log("[1,2] == '1,2':", [1,2] == '1,2');   // true  -> array becomes string '1,2'
console.log("[1,2] === '1,2':", [1,2] === '1,2'); // false -> different types

console.log("\n=== 10. Empty Array vs Empty String / false ===");
console.log("[] == '':", [] == '');       // true  -> [] becomes ''
console.log("[] === '':", [] === '');     // false
console.log("[] == 0:", [] == 0);         // true  -> [] -> '' -> 0
console.log("[] === 0:", [] === 0);       // false
console.log("[] == false:", [] == false); // true
console.log("[] === false:", [] === false);// false

console.log("\n=== 11. Empty Array vs Empty Array (Reference!) ===");
let a = [];
let b = [];
console.log("[] == []:", a == b);     // false -> different objects in memory
console.log("[] === []:", a === b);   // false -> different objects in memory
console.log("a == a:", a == a);       // true  -> same reference
console.log("a === a:", a === a);     // true  -> same reference

console.log("\n=== 12. Object with valueOf ===");
let obj = {
  valueOf: function() { return 42; }
};
console.log("obj == 42:", obj == 42);   // true  -> JS calls valueOf() for ==
console.log("obj === 42:", obj === 42); // false -> different types

console.log("\n========================================");
console.log("SUMMARY:");
console.log("Use === (strict equality) ALWAYS.");
console.log("It checks BOTH value AND type.");
console.log("No hidden type conversion = No surprises!");
console.log("========================================");
