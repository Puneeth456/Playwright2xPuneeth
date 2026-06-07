# JavaScript Interview Concepts

## Why Use `const` for Objects?

### The Core Question
```javascript
const obj1 = {a: 1, b: 2};
// Why const instead of let or var?
```

### Answer

`const` is preferred for object declarations because it prevents **reassignment of the reference**, while still allowing **mutation of the object's properties**.

```javascript
const obj1 = {a: 1, b: 2};

// ✅ ALLOWED: Mutating properties
obj1.a = 99;
obj1.c = 3;
delete obj1.b;

// ❌ ERROR: Reassigning the variable
obj1 = {x: 1}; // TypeError: Assignment to constant variable
```

### Key Reasons

#### 1. Prevents Accidental Reassignment
The most common bug with `let`/`var` is accidentally overwriting an entire object when you only meant to update a property. `const` makes this impossible.

#### 2. Signals Intent to Other Developers
When someone sees `const`, they immediately know: *"This variable will always point to the same object."* This reduces cognitive load and makes code easier to reason about.

#### 3. Reference Immutability vs Value Immutability
`const` locks the **reference** (the pointer/memory address), not the **contents**. The object itself is still mutable. If you need true immutability:

```javascript
const obj1 = Object.freeze({a: 1, b: 2});
obj1.a = 99; // ❌ Silent fail or TypeError in strict mode
```

#### 4. Modern Best Practices
The JavaScript community follows this rule:

> **Use `const` by default. Use `let` only when reassignment is necessary. Never use `var`.**

#### 5. `var` is Function-Scoped and Hoisted
```javascript
function demo() {
    console.log(x); // undefined (hoisted, not error!)
    var x = 5;
    
    if (true) {
        var x = 10; // Same variable! Not block-scoped.
    }
    console.log(x); // 10
}
```

#### 6. `let` Allows Reassignment
Use `let` only when you genuinely need to reassign the variable:
```javascript
let count = 0;
count = count + 1; // Reassignment is intended here
```

For objects, reassignment is rarely needed. If you need a different object, you typically create a new variable.

### Summary Table

| Keyword | Scope | Reassignment | Redeclaration | Use Case |
|---------|-------|--------------|---------------|----------|
| `var` | Function | ✅ Yes | ✅ Yes | ❌ Never use |
| `let` | Block | ✅ Yes | ❌ No | Use when reassignment needed |
| `const` | Block | ❌ No | ❌ No | **Default choice for objects** |

### Interview Tips

- **Be ready to explain:** `const` creates an immutable *binding*, not an immutable *value*.
- **Deep dive:** If asked about true immutability, mention `Object.freeze()`, `Object.seal()`, or libraries like **Immer** or **Immutable.js**.
- **Edge case:** `const` arrays work the same way - you can push/pop elements, but cannot reassign the array variable.
- **Nested objects:** `Object.freeze()` is shallow. For deep freeze, you need recursion or a library.

---

*Last updated: 2026-06-07*
