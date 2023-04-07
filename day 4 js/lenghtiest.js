let strings = ["lucky", "tirupati", "andrapradesh", "india"];
let longestString = strings.reduce(function(longest, current) {
  return current.length > longest.length ? current : longest;
}, "");

console.log(longestString);
