// solution 1

function chunk(arr = [1, 2, 3, 4, 5, 6, 7], size = 2, ans = []) {
  if (arr.length === 0) return ans;
  const chunkBy = Math.min(size, arr.length);
  ans.push(arr.slice(0, chunkBy));
  return chunk(arr.slice(chunkBy), size, ans);
}

// solution 2
function chunk2(arr = [1, 2, 3, 4, 5, 6, 7], size = 2) {
  if (arr.length === 0) return [];
  const chunkBy = Math.min(size, arr.length);
  const currentChunk = arr.slice(0, chunkBy);
  return [currentChunk, ...chunk(arr.slice(chunkBy), size)];
}


