'using strict';

const fibo = (n) => (n <= 1 ? 1 : tailFibo(1, 1, n));

const tailFibo = (first, second, n) => {
  const temp = first + second;
  if (n === 2) return temp;
  first = second;
  second = temp;
  return tailFibo(first, second, n - 1);
};

for (let i = 0; i < 10; ++i) console.log(fibo(i));
