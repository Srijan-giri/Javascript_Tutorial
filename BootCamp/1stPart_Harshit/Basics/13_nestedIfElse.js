// nested if else

// winning number = 19

let winningNumber = 19;
let userNumber = Number(prompt("Guess the number : "));

if(userNumber==winningNumber){
    console.log("Your guess is right!!");
}
else{
    if(userNumber>winningNumber)
    {
        console.log("too high !!!");
    }
    else{
        console.log("too low !!!");
    }
}