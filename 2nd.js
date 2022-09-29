/*console.log('hello World');*/
const ps=require("prompt-sync");
const prompt=ps();
/*let x=parseInt(prompt("enter the value"));
  let  y=parseInt(prompt("enter the valuue 2"));
var c=x+y;
console.log(c);*/
/* let x=parseInt(prompt("enter the number"));
if(x<0)
{
  console.log('value is negative');
}
else if(x==0)
{
  console.log('value is equal to zero');
}
else {
  console.log('value is positive');
}*/
/*let x=parseInt(prompt('enter the first number'));
let y=parseInt(prompt('enter the second number'));
let c=parseInt(prompt('enter the third number'));
if(x>y&&x>c)
{
  console.log('first is greater');
}
else if(x<y&&y>c)
{
  console.log('second is greater');
}
else{
  console.log('third is greater');
}*/
/*let x=parseInt(prompt('enter the number for factorial'));
var fact=1;
for(var i=1;i<=x;i++)
{
fact=fact*i;
}
console.log(fact);*/
/*let x=parseInt(prompt('enter the number for print the table'));
for(let i=1;i<=10;i++)
{
  table=x*i;
  console.log(table);
}*/
/*let x=parseInt(prompt('enter the number 1 : '));
let y=parseInt(prompt('enter the number 2'));

console.log('for addition');
console.log('for substraction');
console.log('for multiplication');
console.log('for divide');
let z=parseInt(prompt('enter the choice'));
switch(z)
{
case 1:let a=x+y;
console.log(a);
break;
case 2:let b=x-y;
console.log(b);
break;
case 3:let q=x*y;
console.log(q);
break;
case 4:let e=x/y;
console.log(e);
break;
}
*/
/*let a=0;
for(i=0;i<=10;i++)
{
a=a+i;
}
console.log(a);*/
let a=["jaiho"];
n=4;
var temp[];
for(i=n-1;i>0;i--)
{
  temp=a[i];
  a[i]=a[n-i-1];
  a[n-i-1]=temp;
}
/*for(i=0;i<n;i++)
{
}*/
console.log(temp[]);
const ps = require("prompt-sync");
const prompt = ps();
Array =[
    {
        id : 007,
        Name : "Pushkar Bhardwaj",
        Sallary : "20 lacks"
    },
    {
        id : 006,
        Name : "Kunal Agarwal",
        Sallary : "36 lacks"
    },
    {
        id : 009,
        Name : "Kanishk Sharma",
        Sallary : "30 lacks"
    }];
    console.log(Array[0]);
    console.log(Array[1]);
    console.log(Array[2]);
    const ps = require("prompt-sync");
const prompt = ps();
const obj=
{
    name : "Pushkar Bhardwaj",
    rollno : 8821103026,
    branch : "CSE"
};
console.log(obj.name);
console.log(obj.rollno);
console.log(obj.branch);
// program to reverse a string
const ps = require("prompt-sync");
const prompt = ps();

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) 
    { 
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string:');

const result = reverseString(string);
console.log(result);
const ps = require("prompt-sync");
const prompt = ps();

const string = prompt('Enter a string:');
console.log(string);
    
    
    
