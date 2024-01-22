// solution 1: taking iterator as an arguement
function primeNumber1(n, i = 2) {
  if (i * i > n) return true;
  if (n % i === 0) return false;
  return primeNumber1(n, ++i);
}

console.log(primeNumber1(13));
console.log(primeNumber1(12));
console.log(primeNumber1(11));
console.log(primeNumber1(19));
console.log(primeNumber1(17));
console.log(primeNumber1(9));

// solution 2: creating a helper function for iterating

function primeNumber2(n) {
  function isPrime(i) {
    if (i * i > n) return true;
    if (n % i === 0) return false;
    return isPrime(++i);
  }

  return isPrime(2);
}

console.log(primeNumber2(13));
console.log(primeNumber2(12));
console.log(primeNumber2(11));
console.log(primeNumber2(19));
console.log(primeNumber2(17));
console.log(primeNumber2(9));
