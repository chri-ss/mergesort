const merge = (left, right) => {
  let newArr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      newArr.push(left[0]);
      left.shift();
    } else {
      newArr.push(right[0]);
      right.shift();
    }
  }

  while (left.length > 0) {
    newArr.push(left[0]);
    left.shift();
  }
  while (right.length > 0) {
    newArr.push(right[0]);
    right.shift();
  }
  return newArr;
};

const mergesort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let left = arr.slice(0, Math.floor(arr.length / 2));
  let right = arr.slice(Math.floor(arr.length / 2));
  left = mergesort(left);
  right = mergesort(right);

  return merge(left, right);
};

console.log(mergesort([3, 7, 1, 3, 2, 4, 9]));
