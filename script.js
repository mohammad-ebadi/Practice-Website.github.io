let count=0;
const lable=document.getElementById("lable");

const decrease=document.getElementById("decrease").onclick=function(){
    //console.log("Hi");
    count--;
    lable.textContent=count;
}
const reset=document.getElementById("reset").onclick=function(){
    count=0;
    lable.textContent=count;
}
const increase=document.getElementById("increase").onclick=function(){
    count++;
    lable.textContent=count;
}