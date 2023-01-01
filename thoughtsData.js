import { pipe } from './helpers.js';

// could be cool to do some kind of revealing module pattern thing with global data
// or could be cool to do a redux-y pattern
// for now, I'll pretend we aren't teaching anything extra like that.
export let thoughts = [
  {
    thought: 'I should buy a boat',
    starred: false,
    comments: [],
  }
];

// have to do this because of exports being stale /shrug
export const getThoughts = () => {
  return thoughts;
}

export const rewriteThoughts = (newThoughts) => {
  thoughts = newThoughts;
}

export const addNewThoughtToCopy = (newThought) => {
  // how to make this function only do one thing but also only
  // take one argument? 
  const copiedThoughts = copyThoughts();
  copiedThoughts.push({ thought: newThought, starred: false, comments: [] });
  return copiedThoughts;
}

export const copyThoughts = () => {
  return [...thoughts];
}

export const saveThought = (thought) => {
  pipe(rewriteThoughts, addNewThoughtToCopy)(thought);
}