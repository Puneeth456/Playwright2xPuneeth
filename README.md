# JavaScript Basics

A beginner-friendly JavaScript learning repository with organized chapters covering fundamental concepts, from basic setup to advanced operators and interview questions.

---

## Project Structure

```
Basics/
├── Chapter_01_basics/
│   ├── 01_Basics.js              # Hello World & variable declaration
│   ├── 02_Js.js                  # Loops, functions, and console output
│   ├── 03_Js_Verify_Setup.js     # Check Node.js platform, arch, and version
│   └── 04_Hotcode.js             # Function calls in a loop
│
├── Chapter_02_Javascript_Concepts/
│   └── 05_JS_Basics.js           # var re-assignment
│
├── Chapter_03_Identifier_literals/
│   ├── 06_Identifier_Rules.js    # Valid & invalid identifier examples
│   ├── 07_Identifier_Part2.js    # Naming conventions: camelCase, PascalCase, snake_case, etc.
│   ├── 08_Comments.js            # Single-line & multi-line comments
│   ├── Identifier_Rules_Examples.js  # Runnable identifier rule demonstrations
│   └── VS_Code_Keyshortcut.md    # Visual Studio Code Windows shortcuts
│
├── Chapter_04_Javascript_Concepts/
│   ├── 09_var_let_const.js       # var, let, const basics
│   ├── 10_Functions.js           # Function examples
│   ├── 11_var_Explained.js       # Detailed var explanation
│   ├── 12_Let_People_Love.js     # let usage examples
│   ├── 13_Const_explained.js     # const explained
│   ├── 14_var_functionscope.js   # var function scope
│   ├── 15_Let_scope.js           # let scope
│   ├── 16_Hoisting.js            # Hoisting basics
│   ├── 17_Hoisting_fn.js         # Function hoisting
│   ├── 18_let_hoisting.js        # let hoisting
│   ├── 19_Let_Hoisting_block.js  # let hoisting in blocks
│   ├── 20_let_const.js           # let vs const
│   ├── 21_Jr_Qa.js               # Junior QA exercise
│   └── 11thMay_Task.md           # Task file (11 May)
│
├── Chapter_05_literals/
│   ├── 22_literals.js            # Literals basics
│   ├── 23_null_undefined.js      # null vs undefined
│   ├── 24_null.js                # null deep dive
│   ├── 25_literals_All.js        # All literals overview
│   ├── 26_literals_Number_all.js # All number types in JS
│   ├── 27_String.js              # String basics
│   ├── 28_Template_literals.js   # Template literals
│   └── 29_backtick_single_double.js  # Backtick vs single vs double quotes
│
├── Chapter_06_Double_triple_equal/
│   ├── 30_Operator.js            # Operators basics
│   ├── 31_Arithmetic_Operators.js # Arithmetic operators
│   ├── 32_Modulus_Op.js          # Modulus operator
│   ├── 33_Expo_Op.js             # Exponentiation operator
│   ├── 34_IQ.js                  # IQ questions
│   ├── 35_Comparision.js         # Comparison operators
│   ├── 36_Comparision_Strict_loose.js # Strict vs loose comparison
│   ├── 37_Loose_Strict.js        # Loose vs strict equality
│   ├── 38_confusing_Comparison.js # Confusing comparison cases
│   ├── 39_Logical_Ops.js         # Logical operators
│   ├── 40_String_Concat_Ops.js   # String concatenation operators
│   ├── 41_Ternary_Ops.js         # Ternary operator
│   ├── 42_Type_Ops.js            # Type operators
│   ├── 43_Incre_Decre_Ops.js     # Increment and decrement operators
│   ├── 44_Null_Ops.js            # Nullish operators
│   ├── 45.Post_Increment.js      # Post-increment examples
│   ├── 46_IQ_Interview.js        # Interview questions on increment/decrement
│   ├── 47_Advance_Incre_Decre.js # Advanced increment/decrement expressions
│   ├── Assignment_Ternary.js     # Ternary operator assignments
│   └── Question_to_ask_Amit.js   # Practice questions on ternary & operators
│
├── Chapter_07_If_Else/
│   ├── 48_IF_Else.js             # Basic if/else
│   ├── 49_IF_Elseif_Else.js      # if/elseif/else chains
│   ├── 50_Real_IF_Else.js        # Real-world if/else examples
│   ├── 51_API_IF_Else.js         # API response handling with if/else
│   ├── 52_IQ_If_Else.js          # IQ questions on if/else
│   ├── 53_If_Else_real.js        # More real-world if/else
│   ├── 54_IQ.js                  # IQ puzzles
│   ├── 55_Else.js                # else clause deep dive
│   ├── 56_Interview_Even&Odd.js  # Interview: even/odd checker
│   ├── 57_Interview_Grade_Calculator.js # Interview: grade calculator
│   ├── 58_Interview_Leap_Year.js # Interview: leap year checker
│   └── Assignment_final.js       # Final assignment on if/else
│
├── Chapter_08_Switch_Statement/
│   ├── 59_Switch.js              # Switch basics
│   ├── 60_No_break.js            # Missing break behavior
│   ├── 61_Default.js             # Default case usage
│   ├── 62_Real_Time_Example.js   # Real-time switch example
│   ├── 63_Switch_Group_Together.js # Grouping cases
│   ├── 64_Interview_question.js  # Interview questions
│   ├── 65_Interview_questions2.js # More interview questions
│   ├── 66_Interview_Questions3.js # Even more interview questions
│   └── 67_Interview_Questions4.js # Additional interview questions
│
├── Chapter_09_User_Input/
│   ├── 68_User_Input.js          # User input basics
│   ├── 69_Node_readlines.js      # Node.js readline module
│   └── 70_Prompt_sync.js         # prompt-sync package usage
│
├── Chapter_10_Loops/
│   ├── 71_For_loops.js           # For loop basics
│   ├── 72_For_loop.js            # For loop variations
│   ├── 73_For_loop2.js           # More for loop examples
│   ├── 74_IQ.js                  # IQ questions on loops
│   ├── 75_For_Each_In_Of.js      # forEach, for...in, for...of
│   ├── 76_While.js               # While loop basics
│   ├── 77_Do_while.js            # Do...while loop basics
│   ├── 78_Do_while.js            # More do...while examples
│   ├── 79_Interview_while.js     # Interview: while loop questions
│   ├── 80_Interview_Do_while.js  # Interview: do...while questions
│   ├── 81_Interview_Continue.js  # Interview: continue in loops
│   ├── 82_Interview_while_Dowhile.js # Interview: while vs do...while
│   └── Assignments.js            # Loop assignments (FizzBuzz, triangle classifier)
│
├── Chapter_11_Arrays/
│   ├── 83_Arrays.js              # Array basics and initialization
│   ├── 84_Arrays_diff.js         # Array creation methods (literal, new Array, Array.of, Array.from)
│   ├── 85_Accessing_Arrays.js    # Accessing and modifying array elements
│   ├── 86_Add_Remove_Array.js    # push, pop, unshift, shift
│   ├── 87_Add_Remove2_Array.js   # splice: add, remove, replace elements
│   ├── 88_Real_Example.js        # Real-world array manipulation
│   ├── 89_Searching.js           # indexOf, lastIndexOf, includes, find, findIndex
│   ├── 90_Iterate_Arrays.js      # Iterating arrays: for, for...of, forEach, for...in
│   ├── 91_Transform_array.js     # map, filter, reduce, flat
│   ├── 92_Sort_Arrays.js         # sort with lexical and natural sorting
│   ├── 93_Array_slicing.js       # slice for copying and extracting subarrays
│   ├── 94_Concat_Arrays.js       # concat and spread operator for combining arrays
│   └── 95_Array_Checking.js     # Array.isArray, every, some
│
├── Chapter_12_Functions/
│   ├── 96_Functions.js           # Function definition and calling
│   ├── 97_Type1_Basic_Function.js # Type 1: no param, no return
│   ├── 98_Type2_Function_with Param_No_Return.js # Type 2: with param, no return
│   ├── 99_Function_without_Param_Return_Type.js # Type 3: no param, with return
│   ├── 100_Function_with_Param_with_Return_type.js # Type 4: with param, with return
│   ├── 101_Template_literal.js   # Template literals inside functions
│   ├── 102_Function_expression.js # Function expressions
│   ├── 103_Arrow_function.js    # Arrow functions (ES6)
│   ├── 104_Arrow_Function_real.js # Real-world arrow function example (status code check)
│   ├── 105_IIFE.js              # Immediately Invoked Function Expressions
│   ├── 106_Default_Param_fn.js  # Default parameters in functions
│   ├── 107_IQ.js                # Interview question: return values and function types
│   ├── 108_Rest_Param_fn.js     # Rest parameters (...args)
│   ├── 109_IQ.js                # Interview question: return behavior, hoisting, TDZ
│   ├── 110_Spread_IQ.js         # Spread operator with functions
│   ├── 111_Scope_Fn.js          # Function scope: global vs local
│   ├── 112_IQ.js                # Interview question: nested scope
│   ├── 113_Closures.js          # Closures basics
│   ├── 114_Closure.js           # Closure practical example (counter)
│   ├── 115_Api_real_example.js  # Real-world closure: retry tracker
│   ├── 116_Higher_Order_Fn.js  # Higher-order functions
│   └── 117_Pure_fn.js          # Pure vs impure functions
│
├── Chapter_13_Strings/
│   ├── 118_strings.js              # String basics and creation
│   ├── 119_String_Properties.js    # String properties: length, indexing
│   ├── 120_Search_Check_String.js  # Searching and checking strings
│   ├── 121_Substring.js            # Substring methods: slice, substring, substr
│   ├── 122_Transform_String.js     # Transform strings: toUpperCase, toLowerCase, trim, replace, repeat
│   ├── 123_String_Conversion.js    # String conversion and casting
│   ├── Assignment_String.js        # String assignment exercises
│   ├── IQ_Strings.js               # Interview questions on strings
│   └── String_Methods_CheatSheet.md # Quick reference cheat sheet for all string methods
│
├── Chapter_14_Objects/
│   ├── 124_Objects.js              # Object basics and creation
│   ├── 125_Objects2.js             # Key-value pairs, dot/bracket notation, reference
│   ├── 126_Objects_Creation.js     # Object reference comparison
│   ├── 127_Objects_real.js         # Real-world object config usage
│   ├── 128_Object_Primitive_Ref.js # Primitive vs reference types
│   ├── 129_Object_Examples.js      # JSON vs JS object syntax
│   ├── 130_IQ.js                   # Dynamic property access, property descriptors
│   ├── 131_Object_Function.js      # Methods inside objects
│   ├── 132_Object_Deconstruction.js # Destructuring, renaming, default values, nested
│   ├── 133_Object_Spread.js        # Spread operator with objects
│   ├── 134_Object_get_set_method.js # Getters and setters
│   ├── 135_IQ_.js                  # Object.keys/values/entries, for...in
│   ├── 136_Objects_Real.js         # Real-world: env config, API response objects
│   └── 137_Const_Let_Obj.js        # const vs let with objects
│
├── Chapter_15/                      # (empty)
│
├── Chapter_16/                      # (empty)
│
├── Chapter_17/                      # (empty)
│
├── Chapter_18_Async_Await/
│   ├── 161_Async_Await.js          # Async function basics
│   ├── 162_Async_P2.js             # Async patterns part 2
│   ├── 163_PyODom.js               # DOM manipulation with async
│   ├── 164_Async_Ex.js             # Async execution examples
│   ├── 165_Async_Await_Parll.js    # Parallel async/await
│   ├── 165_Async_Await_Seq.js      # Sequential async/await
│   ├── 166_IQ.js                   # Async/await interview questions
│   ├── 167_Advance_Login.js        # Advanced login with async
│   └── Tobe_rememembered.md        # Async/await key concepts
│
├── Chapter_19_Playwright_Basics/
│   ├── package.json                # Playwright dependency
│   └── node_modules/               # Installed packages
│
├── Chapter_20_TypeScript_Basics/
│   ├── Export_Import/
│   │   ├── 168_Export_Import.js    # Named import example
│   │   └── 170_Logger.js          # Default import example
│   ├── 169_Utils.js               # Named import with aliasing
│   ├── default.md                 # Default vs Named exports cheatsheet
│   ├── logger.js                  # Default + named export example
│   ├── testutils.js               # Named exports (BASE_URL, formatTestName)
│   └── utils.js                   # Named exports (BASE_URL, formatUppercaseSting)
```

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed

### Run a File
```bash
node Chapter_01_basics/01_Basics.js
node Chapter_03_Identifier_literals/06_Identifier_Rules.js
node Chapter_03_Identifier_literals/Identifier_Rules_Examples.js
```

---

## Chapters Overview

### Chapter 1: Basics
- Printing to console
- Variable declaration with `let`
- `for` loops and functions
- Verifying Node.js environment (`process.platform`, `process.arch`, `process.version`)
- Function calls inside loops

### Chapter 2: JavaScript Concepts (var Basics)
- `var` behavior and re-assignment
- Understanding how `var` variables can be updated

### Chapter 3: Identifiers, Naming Conventions & Comments
- **Identifier Rules**: what makes a valid variable name
- **Naming Conventions**:
  - `camelCase`
  - `PascalCase`
  - `snake_case`
  - `SCREAMING_SNAKE_CASE`
  - `kebab-case` (and why it fails in JS)
  - Hungarian Notation
- Comments: `//` and `/* */`
- Runnable examples demonstrating every identifier rule
- Case-sensitive variable names
- Unicode support in identifiers
- VS Code Keyboard Shortcuts for Windows

### Chapter 4: JavaScript Concepts (var, let, const, Hoisting)
- `var`, `let`, `const` differences and usage
- Function declarations and expressions
- Variable scope: function scope vs block scope
- Hoisting: var, function, and let hoisting
- `const` explained and best practices
- Junior QA exercise

### Chapter 5: Literals & Strings
- All literal types in JavaScript
- `null` vs `undefined`
- Number literals: integers, floats, binary, octal, hex, scientific, BigInt
- String literals: single quotes, double quotes, backticks (template literals)
- Template literals with multiline and expression embedding

### Chapter 6: Operators & Comparisons
- Arithmetic, modulus, and exponentiation operators
- Comparison operators (`==`, `!=`, `===`, `!==`)
- Loose vs strict equality with real examples
- Logical operators (`&&`, `||`, `!`)
- String concatenation operators
- Ternary operator (simple and nested)
- Type operators (`typeof`, `instanceof`)
- Increment and decrement operators (pre and post)
- Advanced increment/decrement expression evaluation
- Nullish coalescing operator (`??`)
- Interview questions and IQ puzzles on operators
- Practice assignments on ternary operators

### Chapter 7: If/Else Statements
- Basic `if` / `else` control flow
- `if` / `else if` / `else` chains
- Real-world examples and API response handling
- Interview exercises: even/odd, grade calculator, leap year

### Chapter 8: Switch Statement
- `switch` statement basics and syntax
- `break` and `default` cases
- Grouping multiple cases together
- Real-time switch examples
- Interview questions on switch logic

### Chapter 9: User Input
- Accepting user input in JavaScript
- Using Node.js `readline` module
- Using `prompt-sync` for synchronous prompts

### Chapter 10: Loops
- `for` loop basics and variations
- `while` loop and `do...while` loop
- Loop control statements: `break` and `continue`
- `forEach`, `for...in`, and `for...of` iteration methods
- Interview questions on all loop types

### Chapter 11: Arrays
- Array basics: empty arrays, initialization, and mixed data types
- Array creation methods: literal, `new Array`, `Array.of`, `Array.from`
- Accessing and modifying elements by index, including negative indexing with `.at()`
- Adding and removing elements: `push`, `pop`, `unshift`, `shift`
- Advanced manipulation with `splice` (add, remove, replace)
- Searching arrays: `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`
- Iteration methods: `for`, `for...of`, `forEach`, `for...in`
- Transform methods: `map`, `filter`, `reduce`, `flat`
- Sorting arrays: lexical and natural sorting with compare functions
- Slicing and combining arrays: `slice`, `concat`, spread operator
- Checking arrays: `Array.isArray`, `every`, `some`
- Real-world array examples

### Chapter 12: Functions
- Function definition and calling basics
- Function types by parameters and return values
- Template literals inside functions
- Function expressions vs declarations
- Arrow functions (ES6) and shorthand syntax
- Real-world arrow function example (HTTP status code validation)
- IIFE (Immediately Invoked Function Expressions)
- Default parameters
- Rest parameters and spread operator with functions
- Function scope: global vs local, nested scope
- Closures: basics, practical examples, and real-world use cases (retry tracker)
- Higher-order functions (functions that take or return functions)
- Pure vs impure functions

### Chapter 13: Strings
- String basics: creation with single quotes, double quotes, and backticks
- String properties: `length`, character access by index
- Searching strings: `indexOf`, `lastIndexOf`, `includes`, `search`, `match`, `matchAll`
- Checking strings: `startsWith`, `endsWith`
- Extracting substrings: `slice`, `substring`, `substr`, `charAt`, `charCodeAt`, `at`
- Transforming strings: `toUpperCase`, `toLowerCase`, `trim`, `trimStart`, `trimEnd`, `replace`, `replaceAll`, `repeat`, `padStart`, `padEnd`
- Splitting strings: `split` method
- String conversion and casting: `String()`, `toString()`, template literals, `JSON.stringify()`
- Interview questions and IQ puzzles on strings
- Quick reference cheat sheet for all JavaScript string methods

### Chapter 14: Objects
- Object basics: creation with literal, `new Object()`, constructor functions
- Key-value pairs, dot notation and bracket notation
- Primitives vs reference types (objects are reference types)
- Methods inside objects, `this` keyword
- Object destructuring: renaming, default values, nested destructuring
- Spread operator with objects (`...`)
- Getters and setters (`get`, `set`)
- Object iteration: `Object.keys()`, `Object.values()`, `Object.entries()`, `for...in`
- `const` vs `let` with objects (reference immutability)
- Real-world examples: env config, API response handling

### Chapter 18: Async / Await
- Async functions always return a Promise
- `await` keyword to consume promises
- Sequential and parallel execution patterns
- Real-world examples including advanced login flow
- Interview questions and IQ puzzles on async patterns

### Chapter 19: Playwright Basics
- Installed Playwright v1.61.0 with @playwright/test v1.61.0
- Browsers installed: Firefox 150.0.2, WebKit 26.4
- Ready for browser automation and end-to-end testing
- Includes test-results output for Playwright test runs

### Chapter 20: TypeScript / ES Modules (Export & Import)
- Named exports and imports with `export` / `import { ... }`
- Default exports with `export default` and import without braces
- Import aliasing with `as` to avoid name collisions
- Combining named and default exports in a single file
- Common mistakes: braces on default imports, missing braces on named imports
- Real-world examples: API URL configs, logger utilities, test name formatters

---

## Topics Covered

| Topic | File |
|-------|------|
| Hello World & Variables | `Chapter_01_basics/01_Basics.js` |
| Loops & Functions | `Chapter_01_basics/02_Js.js` |
| Node.js Environment Check | `Chapter_01_basics/03_Js_Verify_Setup.js` |
| Hot Code / Performance | `Chapter_01_basics/04_Hotcode.js` |
| var vs let Basics | `Chapter_02_Javascript_Concepts/05_JS_Basics.js` |
| Identifier Rules | `Chapter_03_Identifier_literals/06_Identifier_Rules.js` |
| Naming Conventions | `Chapter_03_Identifier_literals/07_Identifier_Part2.js` |
| Comments | `Chapter_03_Identifier_literals/08_Comments.js` |
| Runnable Examples | `Chapter_03_Identifier_literals/Identifier_Rules_Examples.js` |
| VS Code Shortcuts | `Chapter_03_Identifier_literals/VS_Code_Keyshortcut.md` |
| var, let, const Basics | `Chapter_04_Javascript_Concepts/09_var_let_const.js` |
| Functions | `Chapter_04_Javascript_Concepts/10_Functions.js` |
| var Explained | `Chapter_04_Javascript_Concepts/11_var_Explained.js` |
| let Examples | `Chapter_04_Javascript_Concepts/12_Let_People_Love.js` |
| const Explained | `Chapter_04_Javascript_Concepts/13_Const_explained.js` |
| var Function Scope | `Chapter_04_Javascript_Concepts/14_var_functionscope.js` |
| let Scope | `Chapter_04_Javascript_Concepts/15_Let_scope.js` |
| Hoisting Basics | `Chapter_04_Javascript_Concepts/16_Hoisting.js` |
| Function Hoisting | `Chapter_04_Javascript_Concepts/17_Hoisting_fn.js` |
| let Hoisting | `Chapter_04_Javascript_Concepts/18_let_hoisting.js` |
| let Hoisting in Blocks | `Chapter_04_Javascript_Concepts/19_Let_Hoisting_block.js` |
| let vs const | `Chapter_04_Javascript_Concepts/20_let_const.js` |
| Junior QA Exercise | `Chapter_04_Javascript_Concepts/21_Jr_Qa.js` |
| 11th May Task | `Chapter_04_Javascript_Concepts/11thMay_Task.md` |
| Literals Basics | `Chapter_05_literals/22_literals.js` |
| null vs undefined | `Chapter_05_literals/23_null_undefined.js` |
| null Deep Dive | `Chapter_05_literals/24_null.js` |
| All Literals Overview | `Chapter_05_literals/25_literals_All.js` |
| Number Types in JS | `Chapter_05_literals/26_literals_Number_all.js` |
| String Basics | `Chapter_05_literals/27_String.js` |
| Template Literals | `Chapter_05_literals/28_Template_literals.js` |
| Quotes Comparison | `Chapter_05_literals/29_backtick_single_double.js` |
| Operators Basics | `Chapter_06_Double_triple_equal/30_Operator.js` |
| Arithmetic Operators | `Chapter_06_Double_triple_equal/31_Arithmetic_Operators.js` |
| Modulus Operator | `Chapter_06_Double_triple_equal/32_Modulus_Op.js` |
| Exponentiation Operator | `Chapter_06_Double_triple_equal/33_Expo_Op.js` |
| IQ Questions | `Chapter_06_Double_triple_equal/34_IQ.js` |
| Comparison Operators | `Chapter_06_Double_triple_equal/35_Comparision.js` |
| Strict vs Loose Comparison | `Chapter_06_Double_triple_equal/36_Comparision_Strict_loose.js` |
| Loose vs Strict Equality | `Chapter_06_Double_triple_equal/37_Loose_Strict.js` |
| Confusing Comparison Cases | `Chapter_06_Double_triple_equal/38_confusing_Comparison.js` |
| Logical Operators | `Chapter_06_Double_triple_equal/39_Logical_Ops.js` |
| String Concatenation | `Chapter_06_Double_triple_equal/40_String_Concat_Ops.js` |
| Ternary Operator | `Chapter_06_Double_triple_equal/41_Ternary_Ops.js` |
| Type Operators | `Chapter_06_Double_triple_equal/42_Type_Ops.js` |
| Increment / Decrement | `Chapter_06_Double_triple_equal/43_Incre_Decre_Ops.js` |
| Nullish Operators | `Chapter_06_Double_triple_equal/44_Null_Ops.js` |
| Post-Increment Examples | `Chapter_06_Double_triple_equal/45.Post_Increment.js` |
| Interview Questions (Operators) | `Chapter_06_Double_triple_equal/46_IQ_Interview.js` |
| Advanced Increment/Decrement | `Chapter_06_Double_triple_equal/47_Advance_Incre_Decre.js` |
| Ternary Assignments | `Chapter_06_Double_triple_equal/Assignment_Ternary.js` |
| Practice Questions | `Chapter_06_Double_triple_equal/Question_to_ask_Amit.js` |
| If/Else Basics | `Chapter_07_If_Else/48_IF_Else.js` |
| If/Elseif/Else | `Chapter_07_If_Else/49_IF_Elseif_Else.js` |
| Real If/Else Examples | `Chapter_07_If_Else/50_Real_IF_Else.js` |
| API If/Else | `Chapter_07_If_Else/51_API_IF_Else.js` |
| IQ If/Else | `Chapter_07_If_Else/52_IQ_If_Else.js` |
| If/Else Real | `Chapter_07_If_Else/53_If_Else_real.js` |
| Else Clause | `Chapter_07_If_Else/55_Else.js` |
| Interview: Even & Odd | `Chapter_07_If_Else/56_Interview_Even&Odd.js` |
| Interview: Grade Calculator | `Chapter_07_If_Else/57_Interview_Grade_Calculator.js` |
| Interview: Leap Year | `Chapter_07_If_Else/58_Interview_Leap_Year.js` |
| If/Else Assignment | `Chapter_07_If_Else/Assignment_final.js` |
| Switch Basics | `Chapter_08_Switch_Statement/59_Switch.js` |
| No Break in Switch | `Chapter_08_Switch_Statement/60_No_break.js` |
| Default Case | `Chapter_08_Switch_Statement/61_Default.js` |
| Real-Time Switch | `Chapter_08_Switch_Statement/62_Real_Time_Example.js` |
| Switch Group Together | `Chapter_08_Switch_Statement/63_Switch_Group_Together.js` |
| Switch Interview Q1 | `Chapter_08_Switch_Statement/64_Interview_question.js` |
| Switch Interview Q2 | `Chapter_08_Switch_Statement/65_Interview_questions2.js` |
| Switch Interview Q3 | `Chapter_08_Switch_Statement/66_Interview_Questions3.js` |
| Switch Interview Q4 | `Chapter_08_Switch_Statement/67_Interview_Questions4.js` |
| User Input Basics | `Chapter_09_User_Input/68_User_Input.js` |
| Node Readline | `Chapter_09_User_Input/69_Node_readlines.js` |
| Prompt Sync | `Chapter_09_User_Input/70_Prompt_sync.js` |
| For Loops Basics | `Chapter_10_Loops/71_For_loops.js` |
| For Loop Variations | `Chapter_10_Loops/72_For_loop.js` |
| For Loop Examples | `Chapter_10_Loops/73_For_loop2.js` |
| IQ Loops | `Chapter_10_Loops/74_IQ.js` |
| ForEach/In/Of | `Chapter_10_Loops/75_For_Each_In_Of.js` |
| While Loop | `Chapter_10_Loops/76_While.js` |
| Do While Loop | `Chapter_10_Loops/77_Do_while.js` |
| Do While Examples | `Chapter_10_Loops/78_Do_while.js` |
| Interview: While | `Chapter_10_Loops/79_Interview_while.js` |
| Interview: Do While | `Chapter_10_Loops/80_Interview_Do_while.js` |
| Interview: Continue | `Chapter_10_Loops/81_Interview_Continue.js` |
| Interview: While vs Do While | `Chapter_10_Loops/82_Interview_while_Dowhile.js` |
| Loop Assignments | `Chapter_10_Loops/Assignments.js` |
| Array Basics | `Chapter_11_Arrays/83_Arrays.js` |
| Array Creation Methods | `Chapter_11_Arrays/84_Arrays_diff.js` |
| Accessing & Modifying Arrays | `Chapter_11_Arrays/85_Accessing_Arrays.js` |
| Add/Remove Elements (Basic) | `Chapter_11_Arrays/86_Add_Remove_Array.js` |
| Add/Remove Elements (Splice) | `Chapter_11_Arrays/87_Add_Remove2_Array.js` |
| Real-World Array Example | `Chapter_11_Arrays/88_Real_Example.js` |
| Searching Arrays | `Chapter_11_Arrays/89_Searching.js` |
| Iterating Arrays | `Chapter_11_Arrays/90_Iterate_Arrays.js` |
| Transform Arrays | `Chapter_11_Arrays/91_Transform_array.js` |
| Sorting Arrays | `Chapter_11_Arrays/92_Sort_Arrays.js` |
| Array Slicing | `Chapter_11_Arrays/93_Array_slicing.js` |
| Array Concatenation | `Chapter_11_Arrays/94_Concat_Arrays.js` |
| Array Checking | `Chapter_11_Arrays/95_Array_Checking.js` |
| Functions Basics | `Chapter_12_Functions/96_Functions.js` |
| Basic Function (No Param, No Return) | `Chapter_12_Functions/97_Type1_Basic_Function.js` |
| Function with Param, No Return | `Chapter_12_Functions/98_Type2_Function_with Param_No_Return.js` |
| Function without Param, with Return | `Chapter_12_Functions/99_Function_without_Param_Return_Type.js` |
| Function with Param, with Return | `Chapter_12_Functions/100_Function_with_Param_with_Return_type.js` |
| Template Literals in Functions | `Chapter_12_Functions/101_Template_literal.js` |
| Function Expressions | `Chapter_12_Functions/102_Function_expression.js` |
| Arrow Functions | `Chapter_12_Functions/103_Arrow_function.js` |
| Arrow Functions Real Example | `Chapter_12_Functions/104_Arrow_Function_real.js` |
| IIFE | `Chapter_12_Functions/105_IIFE.js` |
| Default Parameters | `Chapter_12_Functions/106_Default_Param_fn.js` |
| IQ: Return Values | `Chapter_12_Functions/107_IQ.js` |
| Rest Parameters | `Chapter_12_Functions/108_Rest_Param_fn.js` |
| IQ: Return & Hoisting | `Chapter_12_Functions/109_IQ.js` |
| Spread Operator IQ | `Chapter_12_Functions/110_Spread_IQ.js` |
| Function Scope | `Chapter_12_Functions/111_Scope_Fn.js` |
| IQ: Nested Scope | `Chapter_12_Functions/112_IQ.js` |
| Closures Basics | `Chapter_12_Functions/113_Closures.js` |
| Closure Counter Example | `Chapter_12_Functions/114_Closure.js` |
| Real-World Closure: Retry Tracker | `Chapter_12_Functions/115_Api_real_example.js` |
| Higher-Order Functions | `Chapter_12_Functions/116_Higher_Order_Fn.js` |
| Pure vs Impure Functions | `Chapter_12_Functions/117_Pure_fn.js` |
| String Basics | `Chapter_13_Strings/118_strings.js` |
| String Properties | `Chapter_13_Strings/119_String_Properties.js` |
| Search & Check Strings | `Chapter_13_Strings/120_Search_Check_String.js` |
| Substring Methods | `Chapter_13_Strings/121_Substring.js` |
| Transform Strings | `Chapter_13_Strings/122_Transform_String.js` |
| String Conversion | `Chapter_13_Strings/123_String_Conversion.js` |
| String Interview Questions | `Chapter_13_Strings/IQ_Strings.js` |
| String Methods Cheat Sheet | `Chapter_13_Strings/String_Methods_CheatSheet.md` |
| Object Basics | `Chapter_14_Objects/124_Objects.js` |
| Object Key-Value & Notation | `Chapter_14_Objects/125_Objects2.js` |
| Object Reference | `Chapter_14_Objects/126_Objects_Creation.js` |
| Real-World Objects | `Chapter_14_Objects/127_Objects_real.js` |
| Primitive vs Reference | `Chapter_14_Objects/128_Object_Primitive_Ref.js` |
| JSON vs JS Objects | `Chapter_14_Objects/129_Object_Examples.js` |
| IQ: Dynamic Properties | `Chapter_14_Objects/130_IQ.js` |
| Object Methods | `Chapter_14_Objects/131_Object_Function.js` |
| Destructuring | `Chapter_14_Objects/132_Object_Deconstruction.js` |
| Spread Operator | `Chapter_14_Objects/133_Object_Spread.js` |
| Getters & Setters | `Chapter_14_Objects/134_Object_get_set_method.js` |
| Object.keys/values/entries | `Chapter_14_Objects/135_IQ_.js` |
| Real Objects: Config & API | `Chapter_14_Objects/136_Objects_Real.js` |
| const vs let with Objects | `Chapter_14_Objects/137_Const_Let_Obj.js` |
| Async Function Basics | `Chapter_18_Async_Await/161_Async_Await.js` |
| Async Patterns Part 2 | `Chapter_18_Async_Await/162_Async_P2.js` |
| DOM with Async | `Chapter_18_Async_Await/163_PyODom.js` |
| Async Execution Examples | `Chapter_18_Async_Await/164_Async_Ex.js` |
| Parallel Async/Await | `Chapter_18_Async_Await/165_Async_Await_Parll.js` |
| Sequential Async/Await | `Chapter_18_Async_Await/165_Async_Await_Seq.js` |
| Async Interview Questions | `Chapter_18_Async_Await/166_IQ.js` |
| Advanced Login | `Chapter_18_Async_Await/167_Advance_Login.js` |
| Async/Await Notes | `Chapter_18_Async_Await/Tobe_rememembered.md` |
| Playwright Basics | `Chapter_19_Playwright_Basics/package.json` |
| Named Import Example | `Chapter_20_TypeScript_Basics/Export_Import/168_Export_Import.js` |
| Named Import with Aliasing | `Chapter_20_TypeScript_Basics/169_Utils.js` |
| Default Import Example | `Chapter_20_TypeScript_Basics/Export_Import/170_Logger.js` |
| Named Exports (utils) | `Chapter_20_TypeScript_Basics/utils.js` |
| Named Exports (testutils) | `Chapter_20_TypeScript_Basics/testutils.js` |
| Default + Named Export (logger) | `Chapter_20_TypeScript_Basics/logger.js` |
| Default vs Named Cheatsheet | `Chapter_20_TypeScript_Basics/default.md` |

---

## VS Code Shortcuts

A full Windows shortcut reference is available in:
- [VS_Code_Keyshortcut.md](Chapter_03_Identifier_literals/VS_Code_Keyshortcut.md)

Quick highlights:
| Shortcut | Action |
|----------|--------|
| `Ctrl + Shift + P` | Command Palette |
| `Ctrl + P` | Quick Open |
| `Ctrl + B` | Toggle Sidebar |
| `` Ctrl + ` `` | Toggle Terminal |
| `Ctrl + D` | Select next occurrence |
| `Shift + Alt + F` | Format document |
| `F5` | Start Debugging |

---

## Author
- **Puneeth** — Playwright & JavaScript Learning Journey

---

Happy Coding!

