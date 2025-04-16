function rollDice(){
    const number = document.getElementById("number").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i = 0; i < number; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src = ${value}.svg>`);

    }
    diceResult.textContent = `Dice : ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');




}