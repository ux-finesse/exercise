# Exercise 2: Valid Parentheses

---

## Problem Statement

Given a string `s` containing only the characters `(`, `)`, `{`, `}`, `[`, and `]`, determine if the input string is **valid**.

A string is valid if:

- Every open bracket is closed by the **same type** of bracket.
- Open brackets are closed in the **correct order** (last opened, first closed).

---

## Examples

| Input    | Output  | Reason                              |
|----------|---------|-------------------------------------|
| `()`     | `true`  | Simple matching pair                |
| `()[]{}` | `true`  | Three valid pairs in sequence       |
| `(]`     | `false` | Wrong closing bracket type          |
| `([)]`   | `false` | Closed out of order                 |
| `{[]}`   | `true`  | Correctly nested                    |
| `(((`    | `false` | Unclosed opening brackets           |

---

## Approach: Using Stack

A **stack** (LIFO: last in, first out) is the natural fit here because brackets must close in *reverse* order of opening.

### Algorithm

1. Create an empty `stack` array.
2. Create a map of closing → opening brackets:
   ```js
   { ')': '(', ']': '[', '}': '{' }
   ```
3. Iterate through each character in `s`:
   - **Opening bracket** → push onto the stack.
   - **Closing bracket** → pop from the stack and check if it matches the expected opener. If not, return `false`.
4. After the loop, the string is valid **only if the stack is empty** (no unmatched openers remain).

---

## Solution

```js
function isValidParentheses(s) {

  // empty stack
  const stack = [];

  // map of closing->opening brackets
  const map = { ")": "(", "]": "[", "}": "{" };

  // iteration of characters
  for (const char of s) {
    if (!map[char]) {
      // if it's an opening bracket - push it
      stack.push(char);
    } else {
      // if it's a closing bracket - pop and check
      const last = stack.pop();
      if (last !== map[char]) return false;
    }
  }
  // valid only if nothing is left unmatched
  return null;
}
```
---

## Run

```bash
node exercises/ex2-valid-parentheses.js
```

### Expected Output

```
=== Valid Parentheses Tests ===
()       => true  (expected true)
()[]{}   => true  (expected true)
(]       => false (expected false)
([)]     => false (expected false)
{[]}     => true  (expected true)
(((      => false (expected false)
```
