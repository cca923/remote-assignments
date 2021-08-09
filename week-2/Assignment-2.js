function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}
// Try to call calculate function correctly

/*
For example, if we have an add function like this:
function add(args) {
  return args.n1 + args.n2;
}
We can call it by passing an object created by JSON literal:
add({n1:3, n2:4}); // your first way
You should apply constructor or class as another way to create a proper object.
add(用類別或建構式產生的物件); // your another way
*/

///////////////////////////////////////////////////
// 👉 First Way
const arg1 = {
  op: "+",
  n1: 2,
  n2: 7,
};
calculate(arg1); // 9

// 👉 Second Way
class Args {
  constructor(op, n1, n2) {
    this.op = op;
    this.n1 = n1;
    this.n2 = n2;
  }
}

const arg2 = new Args("+", 2, 7);
calculate(arg2); // 9
