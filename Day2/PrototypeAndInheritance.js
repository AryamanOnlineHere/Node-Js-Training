import { inherits } from "util";

function Animal(name){
    this.name=name;
}
Animal.prototype.speak=function(){
    return `${this.name} make a noise`;
};

const a =new Animal('Generic Animal');
console.log(a.speak());
const b=new Animal('Tom');
console.log(b.speak());
console.log(a===b);
// console.log(a instanceof Animal);

function Dog(name,breed){
    // is a realtionship
    Animal.call(this.name); // call parent constructor supper()
    this.breed=breed;
}
// inherits from animal
Dog.prototype=Object.create(Animal.prototype);//extend
Dog.prototype.constructor=Dog;
//override speak method
Dog.prototype.speak=function(){
    return `${this.name} barks .`
};

const d=new Dog('Rex','German Shephard');
console.log(d.speak());
