const inputField = document.getElementById('numberInput');
const message = document.getElementById('message');

inputField.addEventListener('input', () => {
  const value = parseInt(inputField.value, 10);

  if (isNaN(value)) {
    message.textContent = "";
    return;
  }

  if (value < 0) {
    message.textContent = "Enter a positive value.";
    return;
  }

  if (value % 2 === 0) {
    const nextEvens = [value + 2, value + 4, value + 6];
    message.textContent = `Next 3 even numbers: ${nextEvens.join(', ')}`;
  } else {
    const nextOdds = [value + 2, value + 4, value + 6];
    message.textContent = `Next 3 odd numbers: ${nextOdds.join(', ')}`;
  }
});
