let score = "100sss";

let scoreAsNumber = Number(score);

console.log(typeof scoreAsNumber); // 100
console.log(scoreAsNumber); // 100

let newscore = null;
console.log(typeof newscore); // object
console.log(Number(newscore)); // null

let newscores = undefined;
console.log(typeof newscores); // object
console.log(Number(newscores)); // NaN

let name = "sandeep";
console.log(typeof name); // string
console.log(Number(name)); // NaN

let istrue = true;
console.log(typeof istrue); // boolean
console.log(Number(istrue)); // 1

let islogedIn = 1;
let bolleanLoginin = Boolean(islogedIn);
console.log(bolleanLoginin); // true

let isloged = "" || "sandeep";
let login = Boolean(isloged);
console.log(login); // false

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber, typeof stringNumber); // 33 string

// "33" => 33
// "abc22"=> NaN
// true => 1
// false => 0
// 1=> true
// 0 => false
// "" => false
// "sandeep" => true
