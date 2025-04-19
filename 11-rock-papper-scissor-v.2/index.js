let rock = document.getElementById("rock");
let papper = document.getElementById("papper");
let scissor = document.getElementById("scissor");
let result = document.getElementById("result");
let random;

let wins = document.getElementById("wins");
let loses = document.getElementById("loses");
let ties = document.getElementById("ties");
let counterTie = 0;
let counterWin = 0;
let counterLose = 0;

rock.onclick = function(){

    random = Math.random();
    if(random >= 0 && random < 1/3){
        result.textContent = (`You : 👊 & AI : 👊 => Tie 😮`);
        counterTie = counterTie + 1;
        ties.textContent = counterTie;
    }
    else if(random >= 1/3 && random < 2/3){
        result.textContent = (`You : 👊 & AI : 🖐 => You Lose 😥`);
        counterLose = counterLose + 1;
        loses.textContent = counterLose;

    }
    else if(random >= 2/3 && random < 1){
        result.textContent = (`You : 👊 & AI : ✌ => You Win 😀`);
        counterWin = counterWin + 1;
        wins.textContent = counterWin;
    }
}

papper.onclick = function(){

    random = Math.random();
    if(random >= 0 && random < 1/3){
        result.textContent = (`You : 🖐 & AI : 👊 => You Win 😀`);
        counterWin = counterWin + 1;
        wins.textContent = counterWin;
    }
    else if(random >= 1/3 && random < 2/3){
        result.textContent = (`You : 🖐 & AI : 🖐 => Tie 😮`);
        counterTie = counterTie + 1;
        ties.textContent = counterTie;
    }
    else if(random >= 2/3 && random < 1){
        result.textContent = (`You : 🖐 & AI : ✌ => You Lose 😥`);
        counterLose = counterLose + 1;
        loses.textContent = counterLose;
    }
}

scissor.onclick = function(){

    random = Math.random();
    if(random >= 0 && random < 1/3){
        result.textContent = (`You : ✌ & AI : 👊 => You Lose 😥`);
        counterLose = counterLose + 1;
        loses.textContent = counterLose;
    }
    else if(random >= 1/3 && random < 2/3){
        result.textContent = (`You : ✌ & AI : 🖐 => You Win 😀`);
        counterWin = counterWin + 1;
        wins.textContent = counterWin;
    }
    else if(random >= 2/3 && random < 1){
        result.textContent = (`You : ✌ & AI : ✌ => Tie 😮`);
        counterTie = counterTie + 1;
        ties.textContent = counterTie;
    }
}