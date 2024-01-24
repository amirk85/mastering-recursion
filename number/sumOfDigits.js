function sumOfDigits(n = 123) {
  function helper(tempN, sum) {
    if (tempN <= 0) return sum;
    if (tempN > 0) {
      const rem = Math.floor(tempN % 10);
      return helper(Math.floor(tempN / 10), sum + rem);
    }
  }
  return helper(n, 0);
}

const ans = sumOfDigits(1234);

console.log(ans);
