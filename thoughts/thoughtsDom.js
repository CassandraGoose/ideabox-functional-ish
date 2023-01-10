import { addToDOM, thoughtUL } from '../domHelpers.js';
import { pipe } from '../helpers.js';

export const createThought = (thought) => {
  return `<li id="${thought.thought}">
    <div class="star-x-container">
      <span id="star" class="${thought.starred ? 'favorite' : null }">✰</span>
      <span id="x">✕</span>
    </div>
    <p>${thought.thought}</p>
    <div class="comment-container">
      <span>Comments...</span>
    </div>
  </li>`;
}

export const addToThoughtList = (content) => {
  return addToDOM(thoughtUL)(content);
}

export const renderThoughts = (thoughts) => {
  // search for other innerHTML comment for context on use of innerHTML
  thoughtUL.innerHTML = '';
  thoughts.forEach((thought) => {
    pipe(addToThoughtList, createThought)(thought);
  })
}

