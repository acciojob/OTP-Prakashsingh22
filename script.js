//your JS code here. If required.
const inputs = document.querySelectorAll('.code');
    inputs[0].focus();

    inputs.forEach((input, index) => {
      // Typing Forward
      input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (!/^[0-9]$/.test(value)) {
          e.target.value = ''; // Allow digits only
          return;
        }
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      // Backspace Behavior
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (input.value === '') {
            if (index > 0) {
              inputs[index - 1].value = ''; // Clear previous input
              inputs[index - 1].focus();    // Move focus backward
            }
         } else {
            input.value = ''; // Just clear current field
          }
        }
    });
	// Optional: handle paste event for user convenience
      input.addEventListener('paste', (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').trim();
        const digits = pasteData.split('').filter(ch => /\d/.test(ch));
        digits.forEach((digit, i) => {
          if (index + i < codes.length) {
            codes[index + i].value = digit;
          }
        });
        const nextIndex = Math.min(index + digits.length, codes.length - 1);
        codes[nextIndex].focus();
    });	
});
