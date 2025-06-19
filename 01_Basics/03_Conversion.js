let score = "100sss";

let scoreAsNumber = Number(score);

//console.log(typeof scoreAsNumber); // 100
//console.log(scoreAsNumber); // 100

let newscore = null;
//console.log(typeof newscore); // object
//console.log(Number(newscore)); // null

let newscores = undefined;
//console.log(typeof newscores); // object
//console.log(Number(newscores)); // NaN

let name = "sandeep";
//console.log(typeof name); // string
//console.log(Number(name)); // NaN

let istrue = true;
//console.log(typeof istrue); // boolean
//console.log(Number(istrue)); // 1

let islogedIn = 1;
let bolleanLoginin = Boolean(islogedIn);
//console.log(bolleanLoginin); // true

let isloged = "" || "sandeep";
let login = Boolean(isloged);
//console.log(login); // false

let someNumber = 33;
let stringNumber = String(someNumber);
//console.log(stringNumber, typeof stringNumber); // 33 string


// "33" => 33
// "abc22"=> NaN
// true => 1
// false => 0
// 1=> true
// 0 => false
// "" => false
// "sandeep" => true


//--------------------Operations on Conversion---------------------


2+2//console.log(2 + 2); // 4
2-2//console.log(2 - 2); // 0
2*2//console.log(2 * 2); // 4
2/2//console.log(2 / 2); // 1
2**2//console.log(2 ** 2); // 4

let str1="hello";
let str2="world";
let str3=str1+str2;

//console.log(str3); // helloworld
console.log(1+2+ "2"+3); // 323
// console.log(1+"2"); // 12
// console.log("3"+"3"); // 33
// console.log(1+2+"3"); // 33
// console.log("1"+2+3); // 123

// console.log(1+2+"3"); // 33

 // if string is first then other will be converted to string
 //if string is last then then first performed as number operation then converted to string
//if string is present in the operation, it will convert the number to string
//if both are numbers, it will perform the operation as a number
//if both are strings, it will concatenate the strings
//if one is string and one is number, it will convert the number to string and concatenate
//if both are booleans, it will convert them to numbers and perform the operation
//if one is boolean and one is number, it will convert the boolean to number and perform the operation
//if one is boolean and one is string, it will convert the boolean to number and perform the operation
//if one is boolean and one is object, it will convert the boolean to number and perform the operation
//if one is object and one is number, it will convert the object to number and perform the operation
//if one is object and one is string, it will convert the object to string and concatenate
//if one is object and one is boolean, it will convert the object to number and perform the operation
//if both are objects, it will convert the objects to numbers and perform the operation
//if one is null and one is number, it will convert the null to number and perform the operation
//if one is null and one is string, it will convert the null to string and concatenate

//console.log(true+);  //error
console.log(+""); // 0
console.log(+true); // 1
console.log(+false);// 0
console.log(+null); // 0
console.log(+undefined); // NaN
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+[1, 2, 3]); // NaN
console.log(+[1]); // 1
console.log(+["1"]); // 1
console.log(+[""]); // 0
console.log(+["sandeep"]); // NaN
console.log(+["1", "2"]); // NaN
console.log(+["1", "2", "3"]); // NaN
console.log(+["1", "2", "3", "4"]); // NaN
