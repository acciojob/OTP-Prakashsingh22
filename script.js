const codes = document.querySelectorAll('.code');
codes[0].focus(); // focus first field on load 

codes.forEach((input, idx) => {
	input.addEventListener('input', (e) => {
		const value = e.target.value;
        if (/[^0-9]/.test(value)) {
			e.target.value = ''; // allow only digit
			return;
        }
        if (value && idx < codes.length - 1) {
			codes[idx + 1].focus();
        }
	});
	input.addEventListener('keydown', (e) => {
		if (e.key === 'Backspace') {
			if (input.value === '' && idx > 0) {
				codes[idx - 1].focus();
				codes[idx - 1].value = '';
			} else {
				input.value = '';
			}
		}
	});
});