const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

checkBtn.addEventListener('click', () => {
  const inputVal = userInput.value;

  if (inputVal === '') {
    alert('Please provide a phone number');
    return;
  }

  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  if (regex.test(inputVal)) {
    resultsDiv.textContent = `Valid US number: ${inputVal}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${inputVal}`;
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});
