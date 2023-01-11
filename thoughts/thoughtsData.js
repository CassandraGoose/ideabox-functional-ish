import { pipe } from '../helpers.js';

// could be cool to do some kind of revealing module pattern thing with global data
// or could be cool to do a redux-y pattern
// for now, I'll pretend we aren't teaching anything extra like that.
export let thoughts = [
  {
    thought: 'I should buy a boat',
    starred: false,
    comments: [],
  },
];

export const getThoughts = () => {
  return thoughts;
};

export const findThought = (thoughtText) => {
  return { ...thoughts.find((thought) => thought.thought === thoughtText) };
};

export const rewriteThoughts = (newThoughts) => {
  thoughts = newThoughts;
};

export const addNewThoughtToCopy = (newThought) => {
  return (copies) => {
    if (newThought) copies.push(newThought);
    return copies;
  };
};

export const copyThoughts = (thoughtText) => {
  return [...thoughts].filter((thought) => thought.thought !== thoughtText);
};

// I get that it's probably cooler/better to just have some wild, curried up function such as
// ```
// export const updateThought = (thoughts) => {
//   return (index) => {
//     return (updateFn) => {
//       const copiedThoughts = [...thoughts];
//       copiedThoughts[index] = updateFn(thoughts[index]);
//       return [...copiedThoughts];
//     };
//   };
// };
// ```
// but I just don't think it's as nice to read as these little pipes below...I'm guessing I need to dig in more to figure out how to make the code above more readable at glance
// i probably wouldn't ask students to pipe or deal with comnposition, i just wanted to test it out for funsies.
export const saveThought = (thought) => {
  if (thoughts.some((singleThought) => singleThought.thought === thought))
    return;
  const pushThought = addNewThoughtToCopy({
    thought: thought,
    starred: false,
    comments: [],
  });
  pipe(rewriteThoughts, pushThought)(copyThoughts());
};

export const toggleFavoriteThought = (thoughtText) => {
  const updateThoughts = thoughts.map((thought) => {
    if (thought.thought === thoughtText)
      return { ...thought, starred: !thought.starred };
    return thought;
  });
  const pushThought = addNewThoughtToCopy();
  pipe(rewriteThoughts, pushThought)(updateThoughts);
};

export const deleteThought = (thoughtText) => {
  const foundThought = findThought(thoughtText);
  pipe(
    rewriteThoughts,
    addNewThoughtToCopy()
  )(copyThoughts(foundThought.thought));
};
