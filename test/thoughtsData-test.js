import { assert } from 'chai';
import {
  thoughts,
  getThoughts,
  rewriteThoughts,
  addNewThoughtToCopy,
  copyThoughts,
  saveThought,
} from '../thoughtsData.js';

describe('thought data functionality', () => {

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
    assert.deepEqual(addNewThoughtToCopy('hi'), [
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
});
