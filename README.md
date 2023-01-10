# Project: Vanilla JS Ideabox

The goal of this project is to explore how a lightly functional Vanilla JS project may look for a student of JS. 

- This is only slightly functional. I really only did a little composition. I moreso considered immutable data and pure functions, but of course it isn't strict. I spent most of my time considering how to organize my code, since organziation is a little more apparent and clear when utilizing OOP, but not so clear in FP. 

## Notes:

My understanding and implementation of ‘functional’:

By no means am I a functional programmer - I’m much too lazy to be dogmatic about anything. In order to better learn the reasoning behind function programming, I’ve outlined my understanding below. 

### Functional Goals: 

- Pure functions

- Immutable data

- Composability (Composition?)

In order to make anything that’s actually useful, we’ll need to rely on the following behaviors and features: 

- The fact that JS has first-class functions, or treats functions as any other variables. With this, we can reference functions, pass them around, etc. 
- The fact that JS allows us to accept functions as arguments and return functions from other functions. With this, we can do complex things with multiple, small functions. 

- Closures. We need to be able to enclose a function for later use and also have references to its lexical environment. This way, we can have small, self-contained state that we can update as needed and it won’t pollute the codebase.
- Partial Application. We may need to call a function which accepts multiple arguments.  We can lean on closure to pre-fill state to call that function without getting out of our single-argument-pattern style of writing code. This potentially makes code more reusable.
- Currying. We may need to break a function which has many arguments into many functions that take one argument each, or similar. This potentially makes code more readable and more reusable.
- Function Composition. We’ve got all these nice, concise functions that only do one thing. When building applications, we need to lots of things, which are likely quite complex. In order to achieve complex behaviors, we can pipeline functions. By passing the result of one function to the next function, ad infinitum, we can achieve this. We may reach for recursion over iteration (but I won't be doing that.)

With all that stated above, I don't think it's reasonable to ask an early student to consider much about composition at all. I included some in my project, but only for practice and exploration. I would expect a student to do no such thing and would only require pure functions where reasonable and immutable data. My wish with removing classes is to lessen the workload of the early mods to allow for more specialization (since students will have time and bandwidth to explore other things), better mental health, and avoiding the common situation where students think that JS is only class-based. Having to include composition deeply would require likely just as much lesson time and practice time as classes. Instead, maybe we once or twice talk about higher order functions and some cool stuff that can be done with that and request they find one spot in the codebase to utilize that functionality. Does this make the projects functional? No, not really. Does it make them use some functional concepts, similar to modern React? Yes.