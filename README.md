# JavaScript Basics

A beginner-friendly JavaScript learning repository with organized chapters covering fundamental concepts, from basic setup to identifiers, naming conventions, and editor shortcuts.

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
│   ├── 05_JS_Basics.js           # var re-assignment
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
└── Chapter_06_Double_triple_equal.js/
    ├── 30_Operator.js            # Operators basics
    ├── 31_Arithmetic_Operators.js # Arithmetic operators
    ├── 32_Modulus_Op.js          # Modulus operator
    ├── 33_Expo_Op.js             # Exponentiation operator
    ├── 34_IQ.js                  # IQ questions
    ├── 35_Comparision.js         # Comparison operators
    ├── 36_Comparision_Strict_loose.js # Strict vs loose comparison
    ├── 37_Loose_Strict.js        # Loose vs strict equality
    ├── 38_confusing_Comparison.js # Confusing comparison cases
    ├── 39_Logical_Ops.js         # Logical operators
    ├── 40_String_Concat_Ops.js   # String concatenation operators
    ├── 41_Ternary_Ops.js         # Ternary operator
    ├── 42_Type_Ops.js            # Type operators
    ├── 43_Incre_Decre_Ops.js     # Increment and decrement operators
    └── 44_Null_Ops.js            # Nullish operators
```

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed

### Run a File
```bash
node Chapter_01_basics/01_Basics.js
node Chapter_02_Javascript_Concepts/06_Identifier_Rules.js
node Chapter_02_Javascript_Concepts/Identifier_Rules_Examples.js
```

---

## Chapters Overview

### Chapter 1: Basics
- Printing to console
- Variable declaration with `let`
- `for` loops and functions
- Verifying Node.js environment (`process.platform`, `process.arch`, `process.version`)
- Function calls inside loops

### Chapter 2: JavaScript Concepts
- `var` behavior and re-assignment
- **Identifier Rules**: what makes a valid variable name
- **Naming Conventions**:
  - `camelCase`
  - `PascalCase`
  - `snake_case`
  - `SCREAMING_SNAKE_CASE`
  - `kebab-case` (and why it fails in JS)
  - Hungarian Notation
- Comments: `//` and `/* */`
- VS Code Keyboard Shortcuts for Windows

### Chapter 3: Identifier & Literals (Coming Soon)
- Runnable examples demonstrating every identifier rule
- Case-sensitive variable names
- Unicode support in identifiers
- Best practices summary

### Chapter 4: JavaScript Concepts (var, let, const, Hoisting)
- `var`, `let`, `const` differences and usage
- Function declarations and expressions
- Variable scope: function scope vs block scope
- Hoisting: var, function, and let hoisting
- `const` explained and best practices

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
- Ternary operator
- Type operators (`typeof`, `instanceof`)
- Increment and decrement operators
- Nullish coalescing operator (`??`)

---

## Topics Covered

| Topic | File |
|-------|------|
| Hello World & Variables | `Chapter_01_basics/01_Basics.js` |
| Loops & Functions | `Chapter_01_basics/02_Js.js` |
| Node.js Environment Check | `Chapter_01_basics/03_Js_Verify_Setup.js` |
| Hot Code / Performance | `Chapter_01_basics/04_Hotcode.js` |
| var vs let Basics | `Chapter_02_Javascript_Concepts/05_JS_Basics.js` |
| Identifier Rules | `Chapter_02_Javascript_Concepts/06_Identifier_Rules.js` |
| Naming Conventions | `Chapter_02_Javascript_Concepts/07_Identifier_Part2.js` |
| Comments | `Chapter_02_Javascript_Concepts/08_Comments.js` |
| Runnable Examples | `Chapter_02_Javascript_Concepts/Identifier_Rules_Examples.js` |
| VS Code Shortcuts | `Chapter_02_Javascript_Concepts/VS_Code_Keyshortcut.md` |
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
| Operators Basics | `Chapter_06_Double_triple_equal.js/30_Operator.js` |
| Arithmetic Operators | `Chapter_06_Double_triple_equal.js/31_Arithmetic_Operators.js` |
| Modulus Operator | `Chapter_06_Double_triple_equal.js/32_Modulus_Op.js` |
| Exponentiation Operator | `Chapter_06_Double_triple_equal.js/33_Expo_Op.js` |
| IQ Questions | `Chapter_06_Double_triple_equal.js/34_IQ.js` |
| Comparison Operators | `Chapter_06_Double_triple_equal.js/35_Comparision.js` |
| Strict vs Loose Comparison | `Chapter_06_Double_triple_equal.js/36_Comparision_Strict_loose.js` |
| Loose vs Strict Equality | `Chapter_06_Double_triple_equal.js/37_Loose_Strict.js` |
| Confusing Comparison Cases | `Chapter_06_Double_triple_equal.js/38_confusing_Comparison.js` |
| Logical Operators | `Chapter_06_Double_triple_equal.js/39_Logical_Ops.js` |
| String Concatenation | `Chapter_06_Double_triple_equal.js/40_String_Concat_Ops.js` |
| Ternary Operator | `Chapter_06_Double_triple_equal.js/41_Ternary_Ops.js` |
| Type Operators | `Chapter_06_Double_triple_equal.js/42_Type_Ops.js` |
| Increment / Decrement | `Chapter_06_Double_triple_equal.js/43_Incre_Decre_Ops.js` |
| Nullish Operators | `Chapter_06_Double_triple_equal.js/44_Null_Ops.js` |

---

## VS Code Shortcuts

A full Windows shortcut reference is available in:
- [VS_Code_Keyshortcut.md](Chapter_02_Javascript_Concepts/VS_Code_Keyshortcut.md)

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
