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
console.log(calculate({ op: "+", n1: 2, n2: 7 }));

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
// 👉 First Way (Object)
const calculateObj = {
  calculate(args) {
    let result;
    if (args.op === "+") {
      result = args.n1 + args.n2;
    } else if (args.op === "-") {
      result = args.n1 - args.n2;
    } else {
      result = "Not supported";
    }
    return console.log(result);
  },
};

calculateObj.calculate({ op: "+", n1: 2, n2: 7 });

// 👉 Second Way (Class)
// You should apply constructor or class as another way to create a proper object.
class Calculate {
  constructor(args) {
    this.args = args;
  }

  calculate() {
    let result;
    if (this.args.op === "+") {
      result = this.args.n1 + this.args.n2;
    } else if (this.args.op === "-") {
      result = this.args.n1 - this.args.n2;
    } else {
      result = "Not supported";
    }
    return console.log(result);
  }
}

const test = new Calculate({ op: "+", n1: 2, n2: 7 });
test.calculate();
