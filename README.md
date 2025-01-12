# JavaScript Bug: Unexpected Behavior with Null Values in Addition

This repository demonstrates a common JavaScript bug involving incorrect handling of null values during arithmetic operations.

## Bug Description
The `foo` function is designed to add two numbers.  However, it fails to handle cases where one or both of the input parameters (`a` and `b`) are null. This leads to unexpected behavior and potential errors.

## Bug Reproduction
1. Clone this repository.
2. Open `bug.js`.
3. Run the code.  Observe that when null is passed as an argument, the result is not as expected.  It does not throw an error but instead returns 0 which is not the expected behavior.

## Solution
The solution involves adding explicit checks for null values and providing appropriate handling (throwing an error or returning a suitable default).

## How to Run the Solution
1. Open `bugSolution.js`.
2. Run the code.  Note the improved handling of null inputs.

This example highlights the importance of robust null checks in JavaScript to prevent unexpected errors and enhance the reliability of code.