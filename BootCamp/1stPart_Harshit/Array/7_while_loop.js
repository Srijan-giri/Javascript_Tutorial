//while loop

const fruits=["apple","mango","banana","grapes"];
let i=0;
const f=[];
while(i<fruits.length)
{
    // console.log(fruits[i].toUpperCase());
    f.push(fruits[i].toUpperCase());
    i++;
}
console.log(f);