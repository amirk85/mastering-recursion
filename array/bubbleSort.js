const swap = (arr, f, s) => ([arr[f], arr[s]] = [arr[s], arr[f]]);

function bubbleSort(arr) {
  function helper(i, j, swapped) {
    if (i === 0) return arr;
    if (j < i) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
      return helper(i, ++j, swapped);
    }
    if (!swapped) return arr; // array is already sorted if no element has swapped
    return helper(--i, 0, false);
  }
  return helper(arr.length - 1, 0, false);
}

const result = bubbleSort([7, 2, 9, 1, 5, 4, 6, 3, 8]);

console.log(result);
