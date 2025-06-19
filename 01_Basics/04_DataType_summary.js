//primitive data types

// 7 types: String, Number, BigInt, Boolean, undefined, null, Symbol

// reference data types nonprimitive types
// 3 types: Object, Function, Array

let id = Symbol("123");
console.log(id); // Symbol(123)

const bignumber = 12345678876696n;
//console.log(bignumber); // 12345678876696n

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function
