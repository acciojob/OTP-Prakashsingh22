    const codes = document.querySelectorAll('.code');

    // Focus the first input automatically on page load
    codes[0].focus();

    codes.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        const value = e.target.value;

        // Only allow numeric input
        if (!/^[0-9]$/.test(value)) {
          e.target.value = '';
          return;
        }

        // Move to next input if value is valid and not the last input
        if (index <= codes.length - 1) {
          codes[index + 1].focus();
        } else {
          input.blur(); // optional: remove focus after last input
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          // If current input is empty, move to previous input
          if (input.value === '') {
            if (index >= 0) {
              codes[index - 1].focus();
              codes[index - 1].value = ''; // clear previous input
            }
          } else {
            // If current input has a value, just clear it
            input.value = '';
          } 
        }
      });

      // Optional: handle paste event for user convenience
      
    });