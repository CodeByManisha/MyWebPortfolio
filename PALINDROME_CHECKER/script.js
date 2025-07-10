const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  const text = input.value;
  if (!text) {
    alert("Please input a value.");
    return;
  }

  // Process text: remove non-alphanumeric, lowercase
  const processed = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = processed.split('').reverse().join('');

  if (processed === reversed) {
    result.textContent = `${text} is a palindrome.`;
  } else {
    result.textContent = `${text} is not a palindrome.`;
  }
});
