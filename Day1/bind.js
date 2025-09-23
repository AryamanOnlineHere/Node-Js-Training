import { get } from "http";

const object = {
  a: 1,
  getA() {
    return this;
  },
};

console.log(object.getA.call({ test: 123 }));
console.log(object.getA());
const getARef = object.getA;
const newGetA = getARef.bind({ bindtest: 123 });
console.log(newGetA());
