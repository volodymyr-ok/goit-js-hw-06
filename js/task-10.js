function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getEl = selector => document.querySelector(selector);
const boxes = getEl('#boxes');
const input = getEl('input[type="number"]');
const createBtn = getEl('[data-create]');
const destroyBtn = getEl('[data-destroy]');
let startSize = 30;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const newDiv = document.createElement('div');
    boxes.append(newDiv);

    newDiv.style.width = startSize + 'px';
    newDiv.style.height = startSize + 'px';
    newDiv.style.backgroundColor = getRandomHexColor();
    startSize += 10;
  }
}

createBtn.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
  startSize = 30;
});
