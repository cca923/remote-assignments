function max(num) {
  let maxNumber = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] > maxNumber) {
      maxNumber = num[i];
    }
  }
  return console.log(maxNumber);
}

max([1, 2, 4, 5]);
max([5, 2, 7, 1, 6]);
max([-1, 2, 6, 1, 6]);
