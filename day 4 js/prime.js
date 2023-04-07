let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isPrime(num) {
  if (num < 2) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; 
  }
  return true;
}
let primes = [];
for (let i = 0; i < values.length; i++) {
  if (isPrime(values[i])) primes.push(values[i]);
}
console.log(primes);
