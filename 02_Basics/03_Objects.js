//singleton
Object.create;

//objects literals
const mySym = Symbol("key1");

const user = {
  name: "sandeep",
  "full name": "sandeep kumar",
  [mySym]: "myKey1",
  age: 30,
  location: "india",
  email: "sp@c.com",
};

//console.log(user.name);
//console.log(user['email']);
//console.log(user['full name']);
//console.log(user[mySym]); //myKey1

//user.age = 31;
//Object.freeze(user); // makes the object immutable
//user.age = 32; // This will not change the age property
//console.log(user); // 31

//Object.seal(user); // makes the object non-extensible but allows modification of existing properties
//user.location = "usa"; // This will modify the location property
//console.log(user); //{
//   name: 'sandeep',
//   'full name': 'sandeep kumar',
//   age: 30,
//   location: 'usa',
//   email: 'sp@c.com',
//   [Symbol(key1)]: 'myKey1'
// }

user.greetings = function () {
  console.log("hello js user");
};

user.gretting2 = function () {
  console.log(`Hello ${this.name} user`);
};
console.log(user.gretting2()); // Hello sandeep user

console.log(user.greetings()); // hello js user
