function charOccurrence(str, target, count = 0) {
  if (!str.length) return count;
  if (str[0] === target) count++;
  return charOccurrence(str.substring(1), target, count);
}

const ans = charOccurrence("helloworld", "r");
console.log(ans);
