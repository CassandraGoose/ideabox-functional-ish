import { getThoughts } from './thoughtsData.js';
import { thoughtUL } from './domHelpers.js';
import { renderThoughts } from './thoughtsDOM.js';
import { saveThought, toggleFavoriteThought, deleteThought } from './thoughtsData.js';
import './styles.css';

const createClickHandler = (element) => {
  return (handler) => {
    return element.addEventListener('click', handler);
  }
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

const handleDeleteThought = (thoughtText) => {
  deleteThought(thoughtText)
  renderThoughts(getThoughts());
}

createClickHandler(document.querySelector('#saveThought'))(saveThoughtHandler);

createClickHandler(thoughtUL)((e) => {
  if (e.target.id === 'x') handleDeleteThought(e.target.closest('li').id);
  if (e.target.id === 'star') handleToggleFavoriteThought(e.target.closest('li').id);
});

renderThoughts(getThoughts());