import { getThoughts } from './thoughtsData.js';
import { thoughtUL } from './domHelpers.js';
import { renderThoughts } from './thoughtsDOM.js';
import { saveThought } from './thoughtsData.js';

// how make this only accept one argument?
const createClickHandler = (element, handler) => {
  element.addEventListener('click', handler);
}

const saveThoughtHandler = (e) => {
  e.preventDefault();
  const formData = new FormData(document.querySelector('form'));
  saveThought(formData.get('thought'));
  renderThoughts(getThoughts());
}

const toggleFavoriteThought = () => {
  console.log('favorite or unfav');
}

const deleteThought = () => {
  console.log('deleteTHought');
}

createClickHandler(document.querySelector('#saveThought'), saveThoughtHandler);

createClickHandler(thoughtUL, (e) => {
  if (e.target.id === 'x') deleteThought();
  if (e.target.id === 'star') toggleFavoriteThought();
})

renderThoughts(getThoughts());