import { merge } from '../src/merge';

describe('merge()', () => {
  // regular test case
  it('Correctly merge three collections into one ascendingly sorted array', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [6, 4, 2];
    const collection_3 = [7, 8, 9];

    expect(merge(collection_1, collection_2, collection_3)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  // duplicated values cases
  it('Correctly merge when there are duplicated values', () => {
    expect(merge([1, 2], [3, 2, 1], [2, 3])).toEqual([1, 1, 2, 2, 2, 3, 3]);
  });

  // already sorted arrays
  it('Correctly merge when there are negative numbers', () => {
    expect(merge([-5, -3], [-1, -2], [-4, 0])).toEqual([-5, -4, -3, -2, -1, 0]);
  });

  // empty array cases
  it('Work with empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
  });
});
