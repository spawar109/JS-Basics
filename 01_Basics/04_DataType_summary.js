//primitive data types

// 7 types: String, Number, BigInt, Boolean, undefined, null, Symbol

// reference data types nonprimitive types
// 3 types: Object, Function, Array

let id = Symbol("123");
//console.log(id); // Symbol(123)

const bignumber = 12345678876696n;
//console.log(bignumber); // 12345678876696n

//console.log(typeof null); // object
//console.log(typeof undefined); // undefined
//console.log(typeof {}); // object
//console.log(typeof []); // object
//console.log(typeof function () {}); // function



// satck memory for primitive types and heap memory for non primitive types

let name= "John"; 
let myNewName = name; // copy of value
myNewName = "Doe"; // changing myNewName does not affect name
//console.log(name); // John
//console.log(myNewName); // John


const userOne={
    name: "John",
    age: 30
};
const userTwo = userOne; // reference to the same object in memory
userTwo.name = "Doe"; // changing userTwo affects userOne
console.log(userOne.name); // Doe
console.log(userTwo.name); // Doe