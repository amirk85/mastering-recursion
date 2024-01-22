function palindrome(n) {
  if (n < 0) return false;

  function helper(tempN, reversed) {
    if (tempN <= 0) return reversed === n;

    const lastDigit = parseInt(tempN % 10);
    tempN = parseInt(tempN / 10);
    reversed = reversed * 10 + lastDigit;

    return helper(tempN, reversed);
  }

  return helper(n, 0);
}

console.log(palindrome(1)); // true
console.log(palindrome(2002)); // true
console.log(palindrome(1234)); // false
console.log(palindrome(1232)); // false
console.log(palindrome(123321)); // true
