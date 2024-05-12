

let  mybutton=document.getElementById("mybutton");
let res =document.getElementById("res")

mybutton.onclick = function(){
    let myval =document.getElementById("myval").value ;
    let cell =document.getElementById("cell");
    let cell2 =document.getElementById("cell2");
    myval=Number(myval);
     if(cell.checked){
        let F =Math.floor((myval *1.8)+32);
        res.textContent=`your fahrenheit value is ${F} °F`;
     }
     else if (cell2.checked){
        let y =Math.floor((myval - 32)/1.8 );
        res.textContent=`your celsius value is ${y}°C`;
     }
     else{
        res.textContent=`Give a value and choose any of the conversion `
     }
};