let showQuantity = 0;
let lable = document.getElementById("lable");

document.getElementById("showQuantity").onclick = function(){
    console.log("Show Quantity : " + showQuantity);
    lable.textContent = showQuantity;
}
document.getElementById("addToCart").onclick = function(){
    showQuantity = showQuantity + 1;
    console.log("Added to the Cart : " + showQuantity);
    lable.textContent = showQuantity;

}
document.getElementById("+2").onclick = function(){
    showQuantity = showQuantity + 2;
    console.log("+ 2 more added : " + showQuantity);
    lable.textContent = showQuantity;

}
document.getElementById("+3").onclick = function(){
    showQuantity = showQuantity + 3;
    console.log("+ 3 more added : " + showQuantity);
    lable.textContent = showQuantity;

}
document.getElementById("resetCart").onclick = function(){
    showQuantity = showQuantity * 0;
    console.log("You have reset your cart : " + showQuantity);
    lable.textContent = showQuantity;

    
}