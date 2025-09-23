// function foo(a, b) {
//   console.log(this);
//   console.log(a, b);
// }
// var cts = {};
// cts.foo = foo;
// cts.foo();
// console.log("------------");
// // foo();

// const customContext = { name: "Aryaman" };
// // foo.apply(customContext, [1]);
// foo.call(customContext,1,2);

// using arrow function

function foo(a, b) {
  console.log(this);
  const outer = this;
  console.log(a, b);
  function inner(outerCtx) {
    console.log("inner function");
  }
  inner = () => {
    console.log("inner context", this);
  };
  inner();
}

const cts = {};
cts.foo = foo;
cts.foo();
