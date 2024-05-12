function isPositive(num){
  return num>19
}
console.log(isPositive(24))


function greet (name ='krishna'){
    console.log('hii',name)
}
greet ( 'babe')
greet()

//recursion

function factorial(n){
    if (n==1)
    return 1
  return  n*factorial(n-1)
}
console.log(factorial(5))

// function expersion
//assigned variables to object


let isEven = function(num){
    return num%2==0
}
console.log(isEven(45)) 
//  we cant make console log before the let function
let arr = [1,2,3,4,5]
 let finSum = function(arr){
    let cum =0
     for(let val of arr){
        cum +=val
     }
     return cum
 }

console .log(finSum(arr))


// arrow function
let varian = (e) =>{ return e


}
let cgf=[2,3,4,5,6,7,8]
let sumOfArr =(cgf) => {
    let sum = 0
    // this for key is used to  save thearray value in one one word 
    for(let value of cgf){
        sum+=value
    }
    return sum
}
console .log(sumOfArr(cgf));

//area of circle


let area = r =>{
    let sum = 3.14 *r*r
    return sum

} 
console.log(area(2))

//variable arguments - rest parameters

let product = function(...args){
    let result = 1
    for ( let val of args){
        result *= val
    }
    return result
}
console.log(product(2,2,4,5,6,7))

let product2 = function(){
    let result =  1
    for (i=0;i<arguments.length;i++)
    result *=arguments[i]
 return result
}
console .log(product2(3,45,4,9))


//generator -generates value one by one
function* indexGenerator(){
    let index = 1
    while(true){
        yield index++
    }
}
// yield === is used for return type in generator.

const gen = indexGenerator()
console.log(gen.next().value)
// this how we can get generator value 

console.clear() // clear the output.

//call back function------ function passsed as a argument



 // foreach give us the one by one value in a array .


 arr =['krish','kumar']

 arr.forEach(print)

 function print(val){
    console.log(val)
 }

 arr.forEach(val =>console.log(val))

 arr=['EEE','CSE','IT','AGRI']
arr.forEach(val =>{
    const opt = document.createElement('option')
    opt.textContent =val
    opt.value =val
    document.getElementById('branch').appendChild(opt)
})
//add the sum on the even num inthe  input.
input=[6,-5,-3,4,5,7,-8,9]

input.forEach( val =>{
    let sum = 0
    while (val>0){
        sum+=val
    }
    return sum
})
console.log()

//map is not like foreach it give one by one value as foreach but  map also do it like that at  the same it give as a output of array[].


let amount =[64,76,89]
let amountinr = amount.map( x =>{
    let sum = x*83
    console.log(sum)
})