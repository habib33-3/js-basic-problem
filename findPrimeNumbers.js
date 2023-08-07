function findPrimeNumbers(arr) {
  if (!Array.isArray(arr)) {
    return "please provide me an array of numbers";
  } else {
    let primes = [];
    for (let item of arr) {
      if (item > 1) {
        let isPrime = true;

        for (let i = 2; i < item; i++) {
          if (item % i === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime === true) {
          primes.push(item);
        }
      }
    }
    return primes;
  }
}

const numbers = [4, 8, 5, 10, 19];

console.log(findPrimeNumbers(numbers));
