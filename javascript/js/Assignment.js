// let num1= 2
// let num2 =3;
// function addNum(number1,number2){
//     let add = number1+number2
//     return add;
// }
// console.log(addNum(num1,num2))

// let x= 5
// let y=3;
// function SubNum(number1,number2){
//     let sub = number1 - number2
//     return sub;
// }
// console.log(SubNum(x, y))

// let x = "Hemanth";

// function greeting(name){
//      let greet= "Happy birthday "+ name ;
//      return greet;
// }
// console.log(greeting(x))

// let roomHeight= 25;
// let roombreath= 4;
//  function calculateRoom(  heigth,breath){
//      let area = 1/2 * heigth* breath;
//      return area;
//  }
  
//  console.log(calculateRoom(roomHeight, roombreath));


// let x ="krishna";
//  function reverseString(name){
//     let rev=" "
//     for ( i= name.length - 1;i>=0;i--){
//     let y=name.charAt(i);
//      rev =rev.concat(y);
   
// }
// return rev;

//  }
//  console.log(reverseString(x))

// let x = 5;

// function oddOreven(x){
//     if (x%2==0){
//         return "The given number is even"
//     }
//     else {
//     return "the given number is odd"
//     }
// }

// console.log(oddOreven(x))
 
// let x = 20;
// function temperatureConvert( celsius){
//        fahrenheit =( (9/5)* celsius)+32;
//        return "the fahrenheit value  is " + fahrenheit + " F";
// }
// console.log(temperatureConvert(x))

// let x = 20;
// function temperatureConvert( F){
//        fahrenheit = (5/9)*(F-32);
//        return "the celsius value  is " + fahrenheit + " C ";
// }
// console.log(temperatureConvert(x))

// let x=10;
// function factorialConvert (number){
     
//     let fact=1;
//     for (i=1;i<=number;i++){
//          fact = fact*i;
         
//     }
//     return "the factorial of the "+number +" is "+ fact
// }
// console.log(factorialConvert(x))

// let x =[3,78,5,90];

// function arraySum(x){
//       let sum =0;
//     for (i=0; i< x.length ;i++){
//        sum = sum + x[i];
//     }
//     return sum;
// }
// console.log(arraySum(x))



// function countVowels(){
//     let vowles = "krishna";
//     vowel ="aeiou"
//     for(i=0;i<vowles.length;i++){
//         for(j=0;j<vowel;j++){
            
//         }

//     }
// }

// let mark = 101;

// function gradeChecker(score){
//  if(score<100){

//     if(score<=100 && score>=90){
//         return "The grade is A"
//     }
//     else if(score < 90 && score >=80){
//         return "The grade is B"
//     }
//     else if(score < 80 && score >=70){
//         return "The grade is C"
//     }
//     else if(score < 70 && score >=60){
//         return "The grade is D"
//     }
//     else
//     {
//         return"the grade is F"
//     }
// }
//   else{
//     return" Gradechecker is only for outof 100"
//    }
// }
// console.log(gradeChecker(mark))

// let temp = 45;

// function weatherForecast(degree){
//     if(degree <85){
//         return" the weather is Hot"
//     }
//     else if(degree <=84 && degree >=65){
//         return" the weather is Warm"
//     }
//     else if(degree <=64 && degree >=55){
//         return" the weather is Cool"
//     }
//     else{
//         return"the weather is cold"
//     }
// }
// console.log(weatherForecast(temp));


// price calculator

// let price = 234;
// let discount = 20;

// function priceCalculator(price , discount){
//     if(discount<=20){
//        amount = price *(discount/100)
//        return amount;
//     }
//     else{
//         return"Invalid Discount"
//     }
// }
// console.log(priceCalculator(price,discount))

let days = 8

function DayCalculator(num){
    switch(num){

        case 1:
            return "Monday"
            break;
        case 2:
            return "Tuesday"
            break;
        case 3:
            return "Wednesday"
            break;
        case 4:
            return"Thursday"
            break;
        case 5:
            return"Friday"
            break;
        case 6:
            return "Saturday"
            break;
        case 7:
            return" Sunday"
            break;
        default:
            return" Invalid Input"
    }
}
console.log(DayCalculator(days))