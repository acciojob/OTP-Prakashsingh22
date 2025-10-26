//your JS code here. If required.
    // Select all input fields
    const inputs = document.querySelectorAll(".code");

    // Automatically focus the first input on page load
    inputs[0].focus();

    // Add event listeners for typing and backspace
    inputs.forEach((input, index) => {
      // Handle typing (move forward)
      input.addEventListener("input", (e) => {
        const value = e.target.value;

        // Only allow numeric input
        if (!/^[0-9]$/.test(value)) {
          e.target.value = "";
          return;
        }

        // Move focus to next input field automatically
        if (index <= inputs.length - 1) {
          inputs[index + 1].focus();
        } else {
          input.blur(); // optional: remove focus from last input
        }
      });

      // Handle backspace (move backward)
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
          // If current input is empty, move to previous input
          if (input.value === "") {
            if (index > 0) {
              inputs[index - 1].focus();
              inputs[index - 1].value = ""; // Clear previous input
            }
          } else {
            // If not empty, just clear current input
            input.value = "";
          }
        } 
      });
    });
