function reverseStr(str) {
  if (!str.length) return "";
  return reverseStr(str.substring(1)) + str[0];
}

console.log(reverseStr('helloworld'))
