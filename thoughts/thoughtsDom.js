import { addToDOM, thoughtUL, createClickHandler } from '../domHelpers.js';
import { pipe } from '../helpers.js';
import { getThoughts } from './thoughtsData.js';
import {
  saveThought,
  toggleFavoriteThought,
  deleteThought,
} from './thoughtsData.js';

export const setupListeners = () => {
  createClickHandler(document.querySelector('#saveThought'))(
    saveThoughtHandler
  );

  createClickHandler(thoughtUL)((e) => {
    if (e.target.id === 'x') handleDeleteThought(e.target.closest('li').id);
    if (e.target.id === 'star')
      handleToggleFavoriteThought(e.target.closest('li').id);
  });
};

const saveThoughtHandler = (e) => {
  e.preventDefault();
  const formData = new FormData(document.querySelector('form'));
  saveThought(formData.get('thought'));
  renderThoughts(getThoughts());
};

const handleToggleFavoriteThought = (thoughtText) => {
  toggleFavoriteThought(thoughtText);
  renderThoughts(getThoughts());
};

const handleDeleteThought = (thoughtText) => {
  deleteThought(thoughtText);
  renderThoughts(getThoughts());
};

export const createThought = (thought) => {
  return `<li id="${thought.thought}">
    <div class="star-x-container">
      <span id="star" class="${thought.starred ? 'favorite' : null}">✰</span>
      <span id="x">✕</span>
    </div>
    <p>${thought.thought}</p>
    <div class="comment-container">
      <span>Comments...</span>
    </div>
  </li>`;
};

export const addToThoughtList = (content) => {
  return addToDOM(thoughtUL)(content);
};

export const renderThoughts = (thoughts) => {
  // search for other innerHTML comment for context on use of innerHTML
  thoughtUL.innerHTML = '';
  thoughts.forEach((thought) => {
    pipe(addToThoughtList, createThought)(thought);
  });
};
