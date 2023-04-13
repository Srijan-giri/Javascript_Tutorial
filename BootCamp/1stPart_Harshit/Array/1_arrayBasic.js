// Array 
// reference type
// Array is a special type of object
// Array is a ordered collection of items

let fruit="apple";

let fruits = ["apple","mango","grapes"];
console.log(fruits);

// array indexing

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let numbers = [1,2,3,4];
console.log(numbers);

let mixed=[1,2,2,4,"String",undefined,null]; // we can store anything in array
console.log(mixed);

fruits=["apple","mango","grapes"];

//change the value

fruits[1]="banana";
console.log(fruits); // array is mutable
// it can change the original array

// array is a object

console.log(typeof fruits); //object

console.log(Array.isArray(fruits)); // true -> check if this array is array or not

// array length
console.log(fruits.length);