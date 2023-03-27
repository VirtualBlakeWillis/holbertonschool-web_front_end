function countPrimeNumbers() {
  let prime = [];
  for (i = 1; i <= 100; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      prime.push(i);
    }

  }
  return (prime);
}


const t0 = performance.now();
for (let i = 0; i < 100; i++) {
  setTimeout(() => countPrimeNumbers());
}
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
