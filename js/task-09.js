function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getEl = selector => document.querySelector(selector);

getEl('.change-color').addEventListener('click', () => {
  const colorChanging = getRandomHexColor();
  getEl('body').style.backgroundColor = colorChanging;
  getEl('.color').textContent = colorChanging;
});
