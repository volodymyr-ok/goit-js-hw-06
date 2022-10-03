const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
  const ingredientsEl = document.querySelector('#ingredients');
  let ingredientsListItem = document.createElement('li');
  ingredientsListItem.textContent = ingredient;
  ingredientsListItem.classList.add('item');
  ingredientsEl.append(ingredientsListItem);
});
