const userObj = {};
(userObj.id = "123"), (userObj.name = "sandeep"), (userObj.isloggedIn = false);

//console.log(userObj); // { id: '123', name: 'sandeep', isloggedIn: false }

const regUser = {
  email: "gmail.com",
  fullName: {
    userFullName: {
      firstName: "Anna",
      lastName: "Jordan",
    },
  },
};

//console.log(regUser.fullName?.userFullName?.firstName) // Anna
//console.log(regUser.fullName?.userFullName?.lastName) // Jordan

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

const obj3 = { ...obj1, ...obj2 }; // Spread operator to merge objects

const obj4 = Object.assign({}, obj1, obj2); // Object.assign to merge objects
//console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(Object.keys(userObj)); // ['id', 'name', 'isloggedIn']
console.log(Object.values(userObj)); // ['123', 'sandeep', false]
console.log(Object.entries(userObj)); // [['id', '123'], ['name', 'sandeep'], ['isloggedIn', false]]

console.log(userObj.hasOwnProperty("name")); // true
console.log(userObj.hasOwnProperty("email")); // false
