
function permutations(up = "abc", p = "", ans = []) {
  if (up.length === 0) {
    p.length && ans.push(p);
    return ans;
  }
  const ch = up[0];

  for (let i = 0; i <= p.length; i++) {
    const f = p.substring(0, i);
    const s = p.substring(i, p.length);
    permutations(up.substring(1), f + ch + s, ans);
  }
  return ans;
}
