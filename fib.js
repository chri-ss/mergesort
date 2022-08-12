// iterative

const fib1 = (n) => {
  let first = 0;
  let second = 1;
  let arr = [0, 1];

  for (let i = 3; i <= n; ++i) {
    let third = first + second;
    arr.push(third);
    first = second;
    second = third;
  }
  return arr;
};

console.log(fib1(8));

// recursive

const fib2 = (n) => {
  if (n === 2) {
    return [0, 1];
  } else {
    let arr = fib2(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};

console.log(fib2(8));
