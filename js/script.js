let newpass = document.getElementById("newpass");
let conpass=document.getElementById("conpass");
let res =document.getElementById("res");

mysubmit.onclick =function(){
    if (newpass.value!==conpass.value){
        res.textContent=`Incorrect password`
    }
    else{
        res.textContent=`Both password matched`
    }
}