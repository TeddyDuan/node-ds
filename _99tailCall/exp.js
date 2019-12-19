'using strict';

const exp = (a, b) => {
  if (a === 0) return 0;
  if (b === 0) return 1;
  if (b < 0) return 1 / exp(a, -b);
  return tailExp(1, a, b);
};

const tailExp = (now, a, b) => {
  if (b > 0) {
    return tailExp(now * a, a, b - 1);
  }
  return now * a;
};

for (let i = 0; i < 5; i++) {
  console.log('----------', i);
  for (let j = 0; j < 5; j++) {
    console.log(exp(i, j));
  }
}
