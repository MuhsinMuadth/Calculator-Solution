// calculator.js - A simple calculator for basic arithmetic operations

// ADD FUNCTION: Adds two numbers together
// a is the first number, b is the second number
function add(a, b) {
  return a + b;
}

// SUBTRACT FUNCTION: Subtracts the second number from the first
// a is the first number, b is the number to subtract
function subtract(a, b) {
  return a - b;
}

// MULTIPLY FUNCTION: Multiplies two numbers
// a is the first number, b is the second number
function multiply(a, b) {
  return a * b;
}

// DIVIDE FUNCTION: Divides the first number by the second
// a is the dividend, b is the divisor
function divide(a, b) {
  return a / b;
}

// CALCULATE FUNCTION: Processes the input string and performs the calculation
// inputString should be in the format "number operator number" (e.g., "3 + 2")
function calculate(inputString) {
  // STEP 1: Split the input string into parts using spaces
  // Example: "5 + 3" becomes ["5", "+", "3"]
  // split(/\s+/) splits the string at every space (including multiple spaces) into an array like object
  const parts = inputString.split(/\s+/);

  // STEP 2: Convert the first and third parts into numbers (you'll be getting them the same way you would get the first and third value in an array)
  // parseFloat converts a string like "5" into the number 5
  const num1 = parseFloat(parts[0]);
  const num2 = parseFloat(parts[2]);

  // STEP 3: Get the operator (+, -, *, /) from the middle part
  const operator = parts[1];

  // STEP 4: Determine which operation to perform based on the operator
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2); // Call the add function
      break;
    case "-":
      result = subtract(num1, num2); // Call the subtract function
      break;
    case "*":
      result = multiply(num1, num2); // Call the multiply function
      break;
    case "/":
      result = divide(num1, num2); // Call the divide function
      break;
    default:
      // If the operator is not recognized, show an error
      console.log("Error: Invalid operator. Use +, -, *, or /");
      return; // Exit the function early
  }

  // STEP 5: Show the result in the console
  console.log(`Result: ${result}`);
}

// EXAMPLE USAGE:
// Test the calculator with different inputs
calculate("4 + 6");    // Result: 10
calculate("10 - 5");   // Result: 5
calculate("3 * 4");    // Result: 12
calculate("20 / 2");   // Result: 10
calculate("8 invalid 2"); // Shows "Error: Invalid operator..."