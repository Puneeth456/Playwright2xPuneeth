/**
 * ============================================================
 * Lab Exercise: 26_literals_Number_all.js
 * Topic: All Number Types and Literals in JavaScript
 * ============================================================
 *
 * JavaScript has a single Number type that stores numbers as
 * 64-bit floating-point values (IEEE 754 standard).
 *
 * It does NOT have separate types for integers, floats, etc.
 * All numbers are of type "number".
 */

// 1. Integer Literals (Whole numbers)
let positiveInt = 42;
let negativeInt = -25;
let zero = 0;

console.log("--- Integer Literals ---");
console.log("Positive:", positiveInt, "| Type:", typeof positiveInt);
console.log("Negative:", negativeInt, "| Type:", typeof negativeInt);
console.log("Zero:", zero, "| Type:", typeof zero);

// 2. Floating-Point Literals (Decimals)
let decimal = 3.14;
let negativeDecimal = -0.99;
let noLeadingZero = .5;   // Valid, but not recommended
let trailingDot = 5.;     // Valid, but not recommended

console.log("\n--- Floating-Point Literals ---");
console.log("Decimal:", decimal, "| Type:", typeof decimal);
console.log("Negative Decimal:", negativeDecimal, "| Type:", typeof negativeDecimal);
console.log("No leading zero:", noLeadingZero, "| Type:", typeof noLeadingZero);
console.log("Trailing dot:", trailingDot, "| Type:", typeof trailingDot);

// 3. Binary Literals (Base 2) - Prefix: 0b or 0B
let binaryNum = 0b1010;  // 10 in decimal
let binaryTwo = 0B1111;  // 15 in decimal

console.log("\n--- Binary Literals (0b / 0B) ---");
console.log("0b1010 =", binaryNum, "| Type:", typeof binaryNum);
console.log("0B1111 =", binaryTwo, "| Type:", typeof binaryTwo);

// 4. Octal Literals (Base 8) - Prefix: 0o or 0O
let octalNum = 0o17;     // 15 in decimal
let octalTwo = 0O10;     // 8 in decimal

console.log("\n--- Octal Literals (0o / 0O) ---");
console.log("0o17 =", octalNum, "| Type:", typeof octalNum);
console.log("0O10 =", octalTwo, "| Type:", typeof octalTwo);

// 5. Hexadecimal Literals (Base 16) - Prefix: 0x or 0X
let hexNum = 0x1A;       // 26 in decimal
let hexTwo = 0xFF;       // 255 in decimal
let hexThree = 0xABC;    // 2748 in decimal

console.log("\n--- Hexadecimal Literals (0x / 0X) ---");
console.log("0x1A =", hexNum, "| Type:", typeof hexNum);
console.log("0xFF =", hexTwo, "| Type:", typeof hexTwo);
console.log("0xABC =", hexThree, "| Type:", typeof hexThree);

// 6. Scientific Notation (Exponential)
let sciOne = 3.14e2;     // 3.14 x 10^2 = 314
let sciTwo = 5e-3;       // 5 x 10^-3 = 0.005
let sciThree = 1.23E+4;  // 1.23 x 10^4 = 12300

console.log("\n--- Scientific / Exponential Notation ---");
console.log("3.14e2 =", sciOne, "| Type:", typeof sciOne);
console.log("5e-3 =", sciTwo, "| Type:", typeof sciTwo);
console.log("1.23E+4 =", sciThree, "| Type:", typeof sciThree);

// 7. Special Number Values

// 7a. Infinity (Positive and Negative)
let posInfinity = Infinity;
let negInfinity = -Infinity;
let divideByZero = 1 / 0;
let negDivideByZero = -1 / 0;

console.log("\n--- Special Values: Infinity ---");
console.log("Infinity:", posInfinity, "| Type:", typeof posInfinity);
console.log("-Infinity:", negInfinity, "| Type:", typeof negInfinity);
console.log("1 / 0 =", divideByZero);
console.log("-1 / 0 =", negDivideByZero);

// 7b. NaN - Not a Number
let notANumber = NaN;
let invalidMath = 0 / 0;
let invalidParse = parseInt("hello");

console.log("\n--- Special Values: NaN ---");
console.log("NaN:", notANumber, "| Type:", typeof notANumber);
console.log("0 / 0 =", invalidMath);
console.log("parseInt('hello') =", invalidParse);

// Important: NaN is the only value not equal to itself
console.log("NaN === NaN:", NaN === NaN);  // false
console.log("isNaN(NaN):", isNaN(NaN));    // true

// 8. BigInt (for arbitrarily large integers) - ES2020
// Suffix: n
let bigNumber = 9007199254740991n;        // max safe integer as BigInt
let hugeNumber = 123456789012345678901234567890n;
let bigFromConstructor = BigInt(42);

console.log("\n--- BigInt Literals ---");
console.log("BigInt literal:", bigNumber, "| Type:", typeof bigNumber);
console.log("Huge BigInt:", hugeNumber, "| Type:", typeof hugeNumber);
console.log("BigInt(42):", bigFromConstructor, "| Type:", typeof bigFromConstructor);

// 9. Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER
console.log("\n--- Safe Integer Limits ---");
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);   // 9007199254740991
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);   // -9007199254740991

// 10. Number.MAX_VALUE and Number.MIN_VALUE
console.log("\n--- Number Limits ---");
console.log("MAX_VALUE:", Number.MAX_VALUE);   // ~1.79e+308
console.log("MIN_VALUE:", Number.MIN_VALUE);   // ~5e-324

// 11. EPSILON (smallest difference between two numbers)
console.log("\n--- Epsilon ---");
console.log("EPSILON:", Number.EPSILON);  // ~2.22e-16

// 12. Summary Table
console.log("\n--- Summary ---");
console.log("All of the above are represented by JavaScript's single 'number' type.");
console.log("Only BigInt has its own separate type: 'bigint'.");
