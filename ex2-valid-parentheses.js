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

