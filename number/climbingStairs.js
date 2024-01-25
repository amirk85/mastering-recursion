function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;
  return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(4));

// with DP
function climbStairsDP(n, memo = {}) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (memo[n]) return memo[n];
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
}

// console.log(climbStairsDP(7));
