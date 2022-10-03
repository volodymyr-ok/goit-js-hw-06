const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
  let ingredientsListItem = document.createElement('li');
  ingredientsListItem.textContent = ingredient;
  ingredientsListItem.classList.add('item');
  document.querySelector('#ingredients').append(ingredientsListItem);
});
