const number=300;
const balance= new Number(100);
//console.log(balance,number); // [Number: 100], 300
typeof balance; // "object"
typeof number; // "number"

//console.log(balance.toString()); // "100"
//console.log(balance.toFixed(2)); // "100.00"

const balance2=100.945
//console.log(balance2.toPrecision(3)); // "101"


const hundreds=10000000;
///console.log(hundreds.toLocaleString()); // "10,000,000"
//console.log(hundreds.toLocaleString('en-IN')); // "1,00,00,000"

//----------------------------Maths in JS----------------------------


//console.log(Math); // Math object provides mathematical constants and functions
//console.log(Math.abs(-4)); // 4
//console.log(Math.ceil(4.2)); // 5
//console.log(Math.floor(4.8)); // 4
//console.log(Math.round(4.9)); // 5

// its only used for the passing the value in the function not on array
//console.log(Math.max(1, 2, 3, 4, 5)); // 5
//console.log(Math.min(1, 2, 3, 4, 5)); // 1

console.log(Math.random()); // random number between 0 and 1
console.log((Math.random() * 10) +1); // random number between 1 and 10

const min=10;
const max=20;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // random number between 10 and 20
console.log(randomNumber); // random number between 10 and 20