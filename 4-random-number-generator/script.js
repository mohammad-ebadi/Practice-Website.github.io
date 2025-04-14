let label = document.getElementById("label");
document.getElementById("generate").onclick = function(){
    let randomNumber =Math.round(Math.random()*10);
    console.log(randomNumber);
    label.textContent = randomNumber;
 }