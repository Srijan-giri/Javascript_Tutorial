// primitive vs reference datatypes

// primitive datatype

let num1=6;
let num2=num1;
console.log(num1==num2);
console.log("value of num1:",num1);
console.log("value of num2:",num2);

num1++;

console.log(num1==num2);
console.log("value of num1:",num1);
console.log("value of num2:",num2);

// reference datatypes
//array

let arr1 = ["item1","item2"];
let arr2=arr1;

console.log("arr1:",arr1);
console.log("arr2:",arr2);

arr1.push("item3");

console.log(arr1===arr2);
console.log("arr1:",arr1);
console.log("arr2:",arr2);

