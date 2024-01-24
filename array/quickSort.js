const swap = (arr, f, s) => ([arr[f], arr[s]] = [arr[s], arr[f]]);

function quickSort(arr, s = 0, e = arr.length - 1) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor((s + e) / 2);
  const pivot = arr[mid];

  let low = s;
  let high = e;

  while (low <= high) {
    while (arr[low] < pivot) low++;
    while (arr[high] > pivot) high--;

    if (low <= high) {
      swap(arr, low, high);
      low++;
      high--;
    }
  }

  if (s < high) quickSort(arr, s, high);
  if (low < e) quickSort(arr, low, e);

  return arr;
}

const result = quickSort([7, 2, 9, 1, 5, 4, 6, 3, 8]);

console.log(result);
