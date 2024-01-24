function binarySeach(arr, target) {



  function helper(s, e) {
		// return "s" for floor
		// return "e" for ceil
    if (s > e) return -1;
    const mid = Math.floor((e + s) / 2);
    if (target < arr[mid]) return helper(s, mid - 1);
    else if (target > arr[mid]) return helper(mid + 1, e);
    else return mid;
  }

  return helper(0, arr.length - 1);
}

console.log(binarySeach([2, 4, 6, 8, 10, 12, 14], 8));
