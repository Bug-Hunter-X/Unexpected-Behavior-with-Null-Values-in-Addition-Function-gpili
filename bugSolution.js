function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); //Improved Error Handling
  }
  return a + b; 
}

console.log(foo(2, 3));   // Output: 5
try {
  console.log(foo(null, 5)); // Throws an error
} catch (e) {
  console.error("Error:", e.message);
}
try {
  console.log(foo(2, null)); // Throws an error
} catch (e) {
  console.error("Error:", e.message);
} 