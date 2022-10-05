function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getEl = selector => document.querySelector(selector);
const boxes = getEl('#boxes');
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

getEl('[data-create]').addEventListener('click', () => {
  const amount = getEl('input[type="number"]').value;
  createBoxes(amount);
});

getEl('[data-destroy]').addEventListener('click', () => {
  boxes.innerHTML = '';
  startSize = 30;
});
