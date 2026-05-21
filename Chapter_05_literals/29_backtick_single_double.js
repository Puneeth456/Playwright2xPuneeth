/**
 * ============================================================
 * Lab Exercise: 29_backtick_single_double.js
 * Topic: Strings in JavaScript - Single vs Double vs Backticks
 * ============================================================
 *
 * Single Quotes ('') and Double Quotes ("")
 *   - Both are the same. Use whichever you prefer.
 *   - Cannot span multiple lines directly.
 *   - Cannot embed expressions inside.
 *
 * Backticks / Template Literals (``)
 *   - Can span multiple lines.
 *   - Can embed variables/expressions using ${expression}.
 *   - Called "Template Literals".
 */

// Single quotes
let single = 'Hello with single quotes';

// Double quotes
let double = "Hello with double quotes";

// Backticks (Template Literals)
let name = 'Puneeth';
let age = 25;
let backtick = `Hello ${name}, you are ${age} years old!`;

console.log("Single:", single);
console.log("Double:", double);
console.log("Backtick:", backtick);

// 1 example showing multiline and expression embedding
let message = `Name: ${name}
Age: ${age}
Next year you will be ${age + 1}`;

console.log("\n--- One powerful backtick example ---");
console.log(message);
