function sum(arr) {
  if (!arr.length) return 0;
  return arr[0] + sum(arr.slice(1));
}

console.log(sum([1, 3, 4]));
