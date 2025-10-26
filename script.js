//your JS code here. If required.
const codes = document.querySelectorAll('.code');
codes[0].focus();
codes.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        const value = e.target.value;
        // Allow only one digit
        if (!/^[0-9]$/.test(value)) {
          e.target.value = '';
          return;
        }

        // Move to the next input if available
        if (index < codes.length - 1) {
          codes[index + 1].focus();
        }
      });
});
