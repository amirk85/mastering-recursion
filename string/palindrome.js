// palindrome

function palindrome(str = "racecar") {
  if (str.length <= 1) return true;
  const e = str.length - 1;
  if (str[0] !== str[e]) return false;
  return palindrome(str.substring(1, e));
}

console.log(palindrome("amir")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("radar")); // true
console.log(palindrome("deed"));; // true
console.log(palindrome("noon"));; // true
console.log(palindrome("refer")); // true;
console.log(palindrome("hello")); // false;
