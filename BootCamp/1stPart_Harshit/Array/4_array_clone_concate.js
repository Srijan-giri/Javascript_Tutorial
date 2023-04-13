//array clone

let arr1=["item1","item2"];
// 1st process --> clone
//
// let arr2=["item1","item2"]; 

// console.log(arr1===arr2);
// console.log("arr1:",arr1);
// console.log("arr2:",arr2);

// 2nd process --> clone

// let arr2 = arr1.slice(0);
// console.log(arr1===arr2);
// console.log("arr1:",arr1);
// console.log("arr2:",arr2);
// arr2.push("item3");
// console.log(arr1===arr2);
// console.log("arr1:",arr1);
// console.log("arr2:",arr2);

// 3rd process --> clone

// let arr2=[].concat(arr1);
// console.log(arr1===arr2);
// console.log("arr1:",arr1);
// console.log("arr2:",arr2);
// arr2.push("item3");
// console.log(arr1===arr2);
// console.log("arr1:",arr1);
// console.log("arr2:",arr2);

// 4th process --> clone

// new way
//spread operator

// let arr2=[...arr1];
// console.log(arr1===arr2);
// console.log("arr1:",arr1);
// console.log("arr2:",arr2);
// arr2.push("item3");
// console.log(arr1===arr2);
// console.log("arr1:",arr1);
// console.log("arr2:",arr2);



// array concate

// console.log(arr1.concat(["item3","item4"]));


//1st process
// let arr2=arr1.slice(0).concat(["item3","item4"]);
// console.log("arr1:",arr1);
// console.log("arr2:",arr2);

//2nd process

// let arr2=[].concat(arr1,"item3","item4");
// console.log("arr1:",arr1);
// console.log("arr2:",arr2);

//3rd process

// let arr2=[...arr1,"item3","item4"];

let newArr = ["item3","item4"];
let arr2=[...arr1,...newArr];
console.log("arr1:",arr1);
console.log("arr2:",arr2);



