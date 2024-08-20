// let name =" krish";
// let age =23;
// let isStudent = false;



// document.getElementById("h1").textContent = `welcome to my page ${name}`;
// document.getElementById("p1").textContent = `services are avalaible ${ age}`;
// document.getElementById("p2").textContent = ` are u a student  ${isStudent }`;


// let username;


// document.getElementById("mysubmt").onclick()=function(){
//     username = document.getElementById("mytext").value;
//     document.getElementById("h1").textContent=username;
// } 
// let age = window.prompt("how old are u ");
// age = Number(age);
 
// age++;
// console .log(age);

// let x ;
// let y ;
// let z ;

// x=Number(x);
// z=Boolean(z);
// y=String(y);
// console.log(x);
// console.log(y);
// console.log(z);

let value;
const PI = 3.14;
let result;

// Corrected event listener syntax
document.getElementById("submit").addEventListener("click", function(){
    value = Number(document.getElementById("text").value);
    result = 2 * value * PI;
    document.getElementById("h").textContent = `my circumference value:${result}`;
});