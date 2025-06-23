const marvelHeroes = ['thor', 'ironman','hulk'];
const dcHeroes = ['superman', 'batman', 'flash'];

//marvelHeroes.push(dcHeroes);
//console.log(marvelHeroes); // [ 'thor', 'ironman', 'hulk', [ 'superman', 'batman', 'flash' ] ]

//const AllHeros=marvelHeroes.concat(dcHeroes);

//console.log(AllHeros); // [ 'thor', 'ironman', 'hulk', 'superman', 'batman', 'flash' ]

const newAllHeros=[...marvelHeroes, ...dcHeroes];
//console.log(newAllHeros); // [ 'thor', 'ironman', 'hulk', 'superman', 'batman', 'flash' ]

const arr1=[1,2,3,[2,3,4,5],6,[7,8,[9,10]]];
const realArray=arr1.flat(Infinity);

console.log(realArray); // [ 1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


Array.isArray('hello'); // false
Array.from('hello'); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(Array.from({name: "sandeep"})); //[]

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
