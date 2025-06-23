const name="John";
const age=30;
console.log(`My name is ${name} and I am ${age} years old.`); // My name is John and I am 30 years old.


const greeting = new String("Hello world");
console.log(greeting.length); // 5
console.log(greeting.toUpperCase()); // HELLO

const str1=greeting.split(" ").map((str,index)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
}).join("");
console.log(str1); // HelloWorld

const names="John";
console.log(names.charAt(3)); // n
console.log(names.indexOf("h")); // 2

const newStr="sandeep";
console.log(newStr.substring(0,5)); //sande   // its not included the end index value
console.log(newStr.slice(0,5)); // sande
console.log(newStr.slice(-8,5)); //sande

const newStr11="  sandeep   ";
console.log(newStr11.trim()); //sandeep

const url="https://www.example.com";
const newUrl=url.replace('www','mdn');
console.log(newUrl); // https://mdn.example.com

console.log(url.includes("htp"));  // false
console.log(url.includes("http"));  //true

const newGreet=greeting.split(" ");
console.log(newGreet); // [ 'Hello', 'world' ]