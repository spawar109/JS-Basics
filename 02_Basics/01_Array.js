// Array
const myArray = [1,2,3,4,5];
 //console.log(myArray); // [ 1, 2, 3, 4, 5 ]
 //console.log(myArray[0]); // 1

 const myArray2 = new Array(1, 2, 3, 4, 5);
 //console.log(myArray2); // [ 1, 2, 3, 4, 5 ]
 //console.log(myArray2[0]); // 1

 const newArray = Array.of(10).fill(12);
// console.log(newArray); // [ 12, 12, 12, 12, 12, 12, 12, 12, 12, 12 ]
 const newArray2 = Array.from({ length: 10 }, (_, i) => i + 1);
 //console.log(newArray2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// Array methods
//myArray.push(6); // adds 6 to the end
//myArray.pop(); // removes the last element
//myArray.unshift(9); // adds 9 to the beginning
//myArray.shift(); // removes the first element 
//console.log(myArray); // [ 2, 3, 4, 5, 6 ]

console.log(myArray.includes(3)); // true
console.log(myArray.indexOf(9)); // -1
console.log(myArray.lastIndexOf(2)); // 1
console.log(myArray.join(",")); //1,2,3,4,5


//slice and splice

console.log('A ',myArray);
const myN1=myArray.slice(1, 3); // creates a new array with elements from index 1 to 2
console.log('slice ',myN1); // [ 2, 3 ]
console.log('C ',myArray); // [ 1, 2, 3, 4, 5 ]


 const myN2=myArray.splice(1, 3);
console.log('splice ',myN2);
console.log('after splice ',myArray); // [ 1, 5 ] // removes elements from index 1 to 3