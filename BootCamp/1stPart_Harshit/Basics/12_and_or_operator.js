// and or operator

let firstName = "Harshit";
let age = 16;

if(firstName[0]=='H' && age>=18){
    console.log("Name starts with H and above 18");
}
else{
    console.log("inside else"); // print (age =16)
}

age=19;

if(firstName[0]=='H' && age>=18){
    console.log("Name starts with H and above 18"); // print
}
else{
    console.log("inside else"); 
}

// or opeartor

let name= "Srijan";
let a=12;

if(name[0]=='S' || a>=18){
    console.log("inside if"); // print
}
else{
    console.log("inside else");
}