import "./styles.css";
// JavaScript code for calculator functionality

// Select the display element
const display = document.getElementById("display");

// Select all the calculator buttons
const buttons = document.querySelectorAll(".button");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    // Handle different button clicks
    switch (value) {
      case "=":
        // Evaluate and display the result
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
        break;
      case "AC":
        // Clear the display
        display.value = "";
        break;
      case "+/-":
        // Toggle positive/negative
        if (display.value !== "") {
          display.value = -parseFloat(display.value);
        }
        break;
      case "%":
        // Calculate percentage
        if (display.value !== "") {
          display.value = parseFloat(display.value) / 100;
        }
        break;
      default:
        // Append the button's value to the display
        display.value += value;
    }
  });
});
