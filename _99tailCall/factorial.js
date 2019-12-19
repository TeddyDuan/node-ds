'using strict';

const factorial = (n) => {
  if (n <= 2) return n;
  return tailFactorial(1, n);
};

const tailFactorial = (now, n) => {
  if (n === 2) return now * n;
  return tailFactorial(now * n, n - 1);
};

for (let i = 0; i < 10; ++i) console.log(factorial(i));
