function uniquePaths(m, n) {
  if (m === 1 || n == 1) return 1;
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
}


// with Dynamic programming
function uniquePathsDP(m, n) {
  const cache = {};

  function findpath(r, c) {
    const key = `${r},${c}`;

    if (cache[key]) return cache[key];
    if (r === 1 || c === 1) return 1;
    const result = findpath(r - 1, c) + findpath(r, c - 1);
    cache[key] = result;
    return result;
  }

  return findpath(m, n);
}

console.log("DP:", uniquePathsDP(23,12))

