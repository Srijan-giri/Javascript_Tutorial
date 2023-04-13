const fruits=["apple","mango","banana","grapes"];

const f=[];
for(let index in fruits)
{
    // console.log(index);
    // console.log(fruits[index]);
    f.push(fruits[index].toUpperCase());
}

console.log(f);