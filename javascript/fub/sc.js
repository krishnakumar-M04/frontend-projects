const colorChange = document.getElementById("wrapper")
const color = document.getElementById("values")
const btn = document.getElementById("btn")
const box =document.getElementById("box")

const hexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']



btn.addEventListener("click", changeBg)

    function changeBg(){
        let hexColor ='#'
        for (i=1; i<=6; i++){
        hexColor += randomHexValue();
    }
    box.style.backgroundColor = hexColor;
    values.innerHTML = hexColor;
} 

function randomHexValue(){
    let randomIndex =Math.floor(Math.random() * 16)

   return hexa[randomIndex]

}