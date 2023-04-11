// undefined

let firstName;
console.log(firstName); // undefined
console.log(typeof firstName); // undefined

firstName = "Srijan"
console.log(firstName)
console.log(typeof firstName);



// null

let age=null;
console.log(age); // null
console.log(typeof age); // Object
// this is bug or error is js
age = 34;
console.log(age); // 34
console.log(typeof age);

// BigInt

let myNumber = BigInt(12);
console.log(myNumber);
console.log(typeof myNumber);
let myNumber1 = BigInt(129033498934696602110014);
console.log(myNumber1);

console.log(Number.MAX_SAFE_INTEGER);

console.log(myNumber+myNumber1);

let num = 12n;
console.log(num);
console.log(typeof num);