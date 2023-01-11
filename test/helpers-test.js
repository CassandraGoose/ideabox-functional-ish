import { assert } from 'chai';
import { pipe } from '../helpers.js';

describe('helpers', () => {
  it('should pipe functions', () => {
    assert.equal(
      pipe(
        (halfGreet) => `hi, ${halfGreet}`,
        (end) => `friend${end}`
      )('!'),
      'hi, friend!'
    );
    assert.equal(
      pipe(
        (halfGreet) => `hi, ${halfGreet}`,
        (end) => `friend${end}`
      )('.'),
      'hi, friend.'
    );
  });
});
