
let label = document.getElementById("label");
let btn = document.getElementById("btn");

btn.onclick = function(){
    let input = document.getElementById("input").value;
    input = Number(input);
    if(input <= 50){
        label.textContent = `Totall : ${input + 10} $ (With shipping)`;
    }
    else{
        label.textContent = `Totall : ${input} $ (Free shipping ✅)`;
    }

}

