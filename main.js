import { getThoughts } from './thoughtsData.js';
import { thoughtUL } from './domHelpers.js';
import { renderThoughts } from './thoughtsDOM.js';
import { saveThought, toggleFavoriteThought } from './thoughtsData.js';
import './styles.css';

// how make this only accept one argument? or lay all this out differently to allow for that style?
const createClickHandler = (element, handler) => {
  element.addEventListener('click', handler);
}

const saveThoughtHandler = (e) => {
  e.preventDefault();
  const formData = new FormData(document.querySelector('form'));
  saveThought(formData.get('thought'));
  renderThoughts(getThoughts());
}

const handleToggleFavoriteThought = (thoughtText) => {
  toggleFavoriteThought(thoughtText);
  renderThoughts(getThoughts());
}

const deleteThought = () => {
  console.log('deleteTHought');
}

createClickHandler(document.querySelector('#saveThought'), saveThoughtHandler);

createClickHandler(thoughtUL, (e) => {
  if (e.target.id === 'x') deleteThought();
  if (e.target.id === 'star') handleToggleFavoriteThought(e.target.closest('li').id);
})

renderThoughts(getThoughts());