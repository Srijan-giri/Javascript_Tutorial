// ternary operator


let age =10;
// let drink;

// if(age>=7)
// {
//     drink="Coffe";
// }
// else{
//     drink="Milk";
// }

// console.log(drink);


// ternary operator

let drink = age>=7 ? "coffee" : "milk";
console.log(drink);

age =23;

let check = age%2==0 ? "even":"odd";
console.log(check);

let a=10;
let b=20;
let c=30;

let max = a>(b>c?b:c)? a:(b>c?b:c);
console.log(max);