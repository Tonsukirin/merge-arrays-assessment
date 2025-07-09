// given
// collection_1, collection_3 already sorted from min(0) to max
// collection_2 already sorted from max to min(0)

export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // reverse collection 2 before comparing
  const reverse2: number[] = [];

  for (let i = collection_2.length - 1; i >= 0; i--) {
    reverse2.push(collection_2[i]);
  }

  return mergeTwoArrays(mergeTwoArrays(collection_1, reverse2), collection_3);
}

function mergeTwoArrays(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  // push remaining to result if either i or j >= a.length or b.length
  while (i < a.length) result.push(a[i++]);
  while (j < b.length) result.push(b[j++]);

  return result;
}
