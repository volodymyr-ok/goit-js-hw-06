const getEl = selector => document.querySelector(selector);
const form = getEl('.login-form');
console.log(form);

form.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = form;
  if (email.value === '' || password.value === '') {
    return alert('Всі поля повинні бути заповнені');
  }
  const result = {};
  result.email = email.value;
  result.password = password.value;
  console.log(result);

  event.currentTarget.reset();
});
