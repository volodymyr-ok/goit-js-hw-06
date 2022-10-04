const getEl = selector => document.querySelector(selector);

getEl('#name-input').addEventListener('input', event => {
  getEl('#name-output').textContent =
    event.target.value === '' ? 'Anonymous' : event.target.value;
});
