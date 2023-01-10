import { assert } from 'chai';
import {
  getThoughts,
  addNewThoughtToCopy,
  copyThoughts,
  saveThought,
  toggleFavoriteThought, 
  findThought,
  deleteThought,
  thoughts,
} from '../thoughts/thoughtsData.js';

describe('thought data functionality', () => {

  //   I am not sure how to avoid utilizing the original thoughts array.

  it('should start with data', () => {
    assert.deepEqual(thoughts, [
      {
        thought: 'I should buy a boat',
        starred: false,
        comments: [],
      },
    ]);
  });

  it('should get thoughts for use outside of the file', () => {
    assert.deepEqual(getThoughts(), [
      {
        thought: 'I should buy a boat',
        starred: false,
        comments: [],
      },
    ]);
  });

  it('should add new thoughts to the copy in prep for rewriting the data', () => {
    assert.deepEqual(addNewThoughtToCopy({ 
      thought: 'hi',
      starred: false,
      comments: [],
    })([ {
      thought: 'I should buy a boat',
      starred: false,
      comments: [],
    }]), [
      {
        thought: 'I should buy a boat',
        starred: false,
        comments: [],
      },
      { 
        thought: 'hi',
        starred: false,
        comments: [],
      }
    ])
  });

  it('should copy thoughts in preparation for overwriting the data', () => {
    assert.deepEqual(copyThoughts(), [
      {
        thought: 'I should buy a boat',
        starred: false,
        comments: [],
      },
    ]);
  });

  it('should save a thought', () => {
    assert.deepEqual(saveThought('hi'), undefined);
    assert.deepEqual(getThoughts(), [
      {
        thought: 'I should buy a boat',
        starred: false,
        comments: [],
      },
      { 
        thought: 'hi',
        starred: false,
        comments: [],
      }
    ]);
  });

  it('should favorite a thought', () => {
    assert.deepEqual(toggleFavoriteThought('I should buy a boat'), undefined);
    assert.deepEqual(thoughts, [
      { thought: 'hi', starred: false, comments: [] },
      { thought: 'I should buy a boat', starred: true, comments: [] }
    ]);
  });

  it('should untoggle a thought', () => {
    assert.deepEqual(toggleFavoriteThought('I should buy a boat'), undefined);
    assert.deepEqual(thoughts, [
      { thought: 'hi', starred: false, comments: [] },
      { thought: 'I should buy a boat', starred: false, comments: [] }
    ]);
  });

  it('should delete a thought', () => {
    assert.deepEqual(deleteThought('I should buy a boat'), undefined);
    assert.deepEqual(thoughts, [
      { thought: 'hi', starred: false, comments: [] },
    ]);
  });

  it('should find a thought', () => {
    assert.deepEqual(findThought('hi'), { thought: 'hi', starred: false, comments: [] });
  })
});
