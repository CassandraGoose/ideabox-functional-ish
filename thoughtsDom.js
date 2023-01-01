import { addToDOM, thoughtUL } from './domHelpers.js';
import { pipe } from './helpers.js';

export const createThought = (text) => {
  return `<li>
    <div class="star-x-container">
      <span id="star">✰</span>
      <span id="x">✕</span>
    </div>
    <p>${text}</p>
    <div class="comment-container">
      <span>Comments...</span>
    </div>
  </li>`;
}

export const addToThoughtList = (content) => {
  return addToDOM(thoughtUL)(content);
}

export const renderThoughts = (thoughts) => {
  // search for other innerHTML comment for context on innerHTML
  thoughtUL.innerHTML = '';
  thoughts.forEach((thought) => {
    pipe(addToThoughtList, createThought)(thought.thought);
  })
}

