document.getElementById("submit").onclick = function(){
    let name = document.getElementById("name").value;
    let h2 = document.getElementById("h2");
    h2.textContent = `Welcom ${name}`;
}