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

export const getThoughts = () => {
  return thoughts;
}

export const rewriteThoughts = (newThoughts) => {
  console.log(newThoughts);
  thoughts = newThoughts;
}

export const addNewThoughtToCopy = (newThought) => {
  return (copies) => {
    copies.push(newThought);
    return copies;
  }
}

export const copyThoughts = (thoughtText) => {
  return [...thoughts].filter((thought) => thought.thought !== thoughtText);
}

export const saveThought = (thought) => {
  const pushThought = addNewThoughtToCopy({ thought: thought, starred: false, comments: [] });
  pipe(rewriteThoughts, pushThought)(copyThoughts());
}

export const toggleFavoriteThought = (thoughtText) => {
  const foundThought = {...thoughts.find((thought) => thought.thought === thoughtText)};
  foundThought.starred = !foundThought.starred;
  const pushThought = addNewThoughtToCopy(foundThought);
  pipe(rewriteThoughts, pushThought)(copyThoughts(thoughtText));
}