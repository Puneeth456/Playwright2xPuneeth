# Default vs Named Exports in JavaScript / TypeScript

## Two export styles

| | Named Export | Default Export |
|---|---|---|
| Keyword | `export` | `export default` |
| Per file | Many allowed | Only **one** per file |
| Import syntax | `{ name }` (braces required) | any name, no braces |
| Rename on import | `{ name as alias }` | just write a new name directly |

---

## Named Exports — `utils.js`

```js
// utils.js
export let BASE_URL = "https://api.staging.com";   // named export

export function formatUppercaseSting(name) {         // named export
    return "TC_" + name.toUpperCase();
}
```

- Both `BASE_URL` and `formatUppercaseSting` are **named exports**.
- The name used at import **must match** the exported name (or use `as` to alias).

### Importing named exports — `169_Utils.js`

```js
import { BASE_URL as bul_util, formatUppercaseSting } from "../utils.js";
//        ^^^^^^^^  ^^^^^^^^^
//        exact name  aliased to bul_util
```

- Curly braces `{ }` are **required** for named imports.
- `as` lets you rename without touching the source file.

---

## Default Export — `logger.js`

```js
// logger.js
export default function log(message) {       // DEFAULT export
    console.log("[log]-default." + message);
}

export function log2(message) {              // named export (same file is fine)
    console.log("[logs]" + message);
}
```

- `export default` marks `log` as the **main** thing this module exports.
- A file can have **one** default export and **many** named exports at the same time.

### Importing the default export — `170_Logger.js`

```js
import log from '../logger.js';
//     ^^^
//     no braces — caller picks any name they like

log("starting the test case");
```

- No curly braces for default imports.
- The name `log` here is chosen by the importer — it could be `logger`, `myLog`, or anything.

---

## Side-by-side comparison

```js
// ---- EXPORTING ----

// named
export const X = 1;
export function foo() {}

// default
export default function bar() {}


// ---- IMPORTING ----

// named  → braces, exact name (or alias with `as`)
import { X, foo } from './mod.js';
import { foo as myFoo } from './mod.js';

// default → no braces, any name you want
import bar from './mod.js';
import whateverName from './mod.js';   // same thing, different local name

// both at once
import bar, { X, foo } from './mod.js';
```

---

## When to use which

| Scenario | Use |
|---|---|
| Module exports **one primary thing** (a class, a function, a config object) | `export default` |
| Module exports **multiple utilities** (helper functions, constants) | named exports |
| Importing the one main thing | default import (no braces) |
| Importing specific helpers | named import (with braces) |

### Real examples from this chapter

| File | Export style | Why |
|---|---|---|
| `utils.js` | Named (`BASE_URL`, `formatUppercaseSting`) | Multiple unrelated utilities |
| `logger.js` | Default (`log`) + Named (`log2`) | `log` is the primary API; `log2` is secondary |
| `169_Utils.js` | Consumes named exports | Needs specific helpers, uses `as` to avoid name collision |
| `170_Logger.js` | Consumes default export | Only needs the main `log` function |

---

## Common mistakes

```js
// WRONG: braces on a default import
import { log } from '../logger.js';   // ❌ imports the NAMED log2 equivalent, not the default

// CORRECT
import log from '../logger.js';       // ✅

// WRONG: no braces on a named import
import BASE_URL from '../utils.js';   // ❌ utils.js has no default export — will be undefined

// CORRECT
import { BASE_URL } from '../utils.js'; // ✅
```
