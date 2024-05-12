
const myCheck = document.getElementById('myCheck');
const visabtn = document.getElementById('visabtn');
const paybtn = document.getElementById('paybtn');
const credit = document.getElementById('credit');
const upibtn = document.getElementById('upibtn');
const mysubmit = document.getElementById('mysubmit');
const ressubmit = document.getElementById('ressubmit');
const paymentoption = document.getElementById('paymentoption');

mysubmit.onclick = function () {
    if (myCheck.checked) {
        ressubmit.textContent = `you are subscribed`;
    }
    else
    {
        ressubmit.textContent = `you are not subscribed`;
    }
    if(visabtn.checked){
        paymentoption.textContent=`you are paying with visa`; 
    }
    else if(paybtn.checked){
        paymentoption.textContent=`you are paying with visa`;
    }
};