# JavaScript String Methods Cheat Sheet

## Quick Reference Table

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `length` | Returns string length | `"Hello".length` | `5` |
| `charAt(index)` | Returns character at index | `"Hello".charAt(1)` | `"e"` |
| `charCodeAt(index)` | Returns Unicode of character | `"A".charCodeAt(0)` | `65` |
| `at(index)` | Returns character at index (supports negatives) | `"Hello".at(-1)` | `"o"` |
| `slice(start, end)` | Extracts part of string | `"Hello".slice(1, 4)` | `"ell"` |
| `substring(start, end)` | Similar to slice | `"Hello".substring(1, 4)` | `"ell"` |
| `substr(start, length)` | Extracts `length` chars from start | `"Hello".substr(1, 3)` | `"ell"` |
| `toUpperCase()` | Converts to uppercase | `"hello".toUpperCase()` | `"HELLO"` |
| `toLowerCase()` | Converts to lowercase | `"HELLO".toLowerCase()` | `"hello"` |
| `concat(...strings)` | Joins strings | `"Hello".concat(" ", "World")` | `"Hello World"` |
| `trim()` | Removes whitespace from both ends | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` | Removes whitespace from start | `"  hi  ".trimStart()` | `"hi  "` |
| `trimEnd()` | Removes whitespace from end | `"  hi  ".trimEnd()` | `"  hi"` |
| `padStart(targetLength, padString)` | Pads from start | `"5".padStart(3, "0")` | `"005"` |
| `padEnd(targetLength, padString)` | Pads from end | `"5".padEnd(3, "0")` | `"500"` |
| `repeat(count)` | Repeats string | `"Ha".repeat(3)` | `"HaHaHa"` |
| `replace(search, replaceWith)` | Replaces first match | `"a-b".replace("-", "/")` | `"a/b"` |
| `replaceAll(search, replaceWith)` | Replaces all matches | `"a-b-c".replaceAll("-", "/")` | `"a/b/c"` |
| `split(separator)` | Splits into array | `"a,b,c".split(",")` | `["a", "b", "c"]` |
| `indexOf(search)` | Returns first index of match | `"hello".indexOf("l")` | `2` |
| `lastIndexOf(search)` | Returns last index of match | `"hello".lastIndexOf("l")` | `3` |
| `includes(search)` | Checks if string contains substring | `"hello".includes("ell")` | `true` |
| `startsWith(search)` | Checks start of string | `"hello".startsWith("he")` | `true` |
| `endsWith(search)` | Checks end of string | `"hello".endsWith("lo")` | `true` |
| `search(regex)` | Search by regex, returns index | `"abc123".search(/\d+/)` | `3` |
| `match(regex)` | Matches regex | `"abc123".match(/\d+/)` | `["123"]` |
| `matchAll(regex)` | Returns all matches iterator | `"a1b2".matchAll(/\d/g)` | Iterator with `1`, `2` |
| `localeCompare(str)` | Compares two strings | `"a".localeCompare("b")` | `-1` |
| `normalize()` | Returns Unicode Normalization Form | `"é".normalize()` | Normalized form |
| `valueOf()` | Returns primitive value | `new String("hi").valueOf()` | `"hi"` |
| `toString()` | Converts to string | `(123).toString()` | `"123"` |
| `String.raw` | Returns raw string from template | ``String.raw`C:\n` `` | `"C:\n"` |

---

## Template Literals (Backticks `` ` ``)

| Feature | Syntax | Example | Output |
|---------|--------|---------|--------|
| Interpolation | `${expression}` | `` `Hello ${name}` `` | `"Hello Arpitha"` |
| Multiline | Backtick strings | `` `Line1\nLine2` `` | Multi-line string |
| Expression | `${2+2}` | `` `Result: ${2+2}` `` | `"Result: 4"` |

---

## String Conversion / Casting

| Method | Example | Output |
|--------|---------|--------|
| `String(value)` | `String(123)` | `"123"` |
| `.toString()` | `(true).toString()` | `"true"` |
| Template literal | `` `${undefined}` `` | `"undefined"` |
| `JSON.stringify()` | `JSON.stringify({a:1})` | `'{"a":1}'` |

---

## Quick Memory Tips

- **Search & Check**: `indexOf`, `lastIndexOf`, `includes`, `startsWith`, `endsWith`
- **Extract**: `slice`, `substring`, `substr`, `at`, `charAt`
- **Transform**: `toUpperCase`, `toLowerCase`, `trim`, `replace`, `repeat`, `padStart`, `padEnd`
- **Split/Join**: `split`, `concat`
- **Regex**: `search`, `match`, `matchAll`, `replace`, `replaceAll`

---

> **Note:** Strings in JavaScript are **immutable** — all methods return a *new* string, they don't modify the original.
