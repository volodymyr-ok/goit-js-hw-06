let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterResult = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  counterResult.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  counterResult.textContent = counterValue;
});
