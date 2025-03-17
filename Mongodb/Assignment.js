// console.log(foo());

// const obj = {
//     value: 42,
//     getValue: function() {
//     return () => this.value;
//     }
//     };
//     const func = obj.getValue();

//     console.log(func())
// async function test() {
//     console.log("A");
//     await new Promise(resolve => setTimeout(resolve, 0));
//     console.log("B");
//     }
//     test();
//     console.log("C");

// function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
//     }
//     const iterator = gen();
//     console.log(iterator.next().value);
//     console.log(iterator.next().value);
//     console.log(iterator.next().value);

// const set = new Set([[1], 2, 3, 3, 4]);
// for (let item of set) {
// console.log(item);
// }
// const map = new Map([[1, "one"], [2, "two"]]);
// map.forEach((value, key) => {
// console.log(key, value);
// });

class Animal {
    constructor(name) {
    this.name = name;
    }
    speak() {
    console.log(this.name + "  a noise.");
    }
    }
    class Dog extends Animal {
    speak() {
    console.log(this.name + " barks.");
    }
    }
    const d = new Dog("Rex");
    d.speak();