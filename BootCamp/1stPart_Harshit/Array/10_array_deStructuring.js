let myArray=["value1","value2","value3","value4","value5"];


// destructure the array

// let[value1,value2,value3,value4,value5]=myArray;
// console.log("value1:",value1);
// console.log("value2:",value2);
// console.log("value3:",value3);
// console.log("value4:",value4);
// console.log("value5:",value5);

// value1="value changed";
// console.log("value1:",value1);

// const[value1,value2,value3,value4,value5]=myArray;
// console.log("value1:",value1);
// value1="value changed"; // error
// console.log("value1:",value1);

// conditions

//1.

// myArray=["value1"];
// let[value1,value2,value3,value4,value5]=myArray;
// console.log("value1:",value1); //value1
// console.log("value2:",value2); //undefined
// console.log("value3:",value3); //undefined
// console.log("value4:",value4); //undefined
// console.log("value5:",value5); //undefined


//2.

// myArray=["value1","value2","value3"];

// let[value1,value2]=myArray;
// console.log("value1:",value1);  //value1
// console.log("value2:",value2); // value2

// let[value1,,value2]=myArray;
// console.log("value1:",value1);  // value1
// console.log("value2:",value2);   // value3


//3.

myArray=["value1","value2","value3","value4","value5"];
// let myNewArray=myArray.slice(2);
let[value1,value2,...myNewArray]=myArray;
console.log("value1:",value1); // value1
console.log("value2:",value2); // value2
console.log("myNewArray:",myNewArray); // ["value3","value4","value5"]

