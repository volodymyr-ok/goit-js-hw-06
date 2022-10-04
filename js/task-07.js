const getEl = selector => document.querySelector(selector);
const input = getEl('#font-size-control');
console.dir(input);

input.addEventListener('input', () => {
  getEl('#text').style.fontSize = input.value + 'px';
  console.log(1 + 1);
});
