Exercise 2 — Valid Parentheses (stack)
Problem:
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.
A string is valid if:
- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.
Run:
  node exercises/ex2-valid-parentheses.js
 

function isValidParentheses(s) {
  // TODO:
  // 1) Create an empty stack array
  // 2) Create a map of closing->opening brackets: { ')':'(', ']':'[', '}':'{' }
  // 3) Iterate through characters:
  //    - if it's an opening bracket, push to stack
  //    - if it's a closing bracket:
  //        - pop last opening
  //        - if it doesn't match, return false
  // 4) At the end, string is valid if stack is empty
  return null;
}

const tests = [
  { input: "()", expected: true },
  { input: "()[]{}", expected: true },
  { input: "(]", expected: false },
  { input: "([)]", expected: false },
  { input: "{[]}", expected: true },
  { input: "(((", expected: false }
];

console.log("\n=== Valid Parentheses Tests ===");
for (const { input, expected } of tests) {
  const result = isValidParentheses(input);
  console.log(`${input.padEnd(8)} => ${String(result).padEnd(5)} (expected ${expected})`);
}
