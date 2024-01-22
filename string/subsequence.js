// possible subseq of string
function subseq(up = "abc", p = "", ans = []) {
  if (up.length === 0) {
    p.length && ans.push(p);
    return;
  }

  subseq(up.substring(1), p + up[0], ans);
  subseq(up.substring(1), p, ans);

  return ans;
}
