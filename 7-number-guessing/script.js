const minNumber = 1;
const maxNumber = 100;
const answer = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNumber} - ${maxNumber} :`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number !");
    }
    else if(guess < minNumber || guess > maxNumber){
        window.alert("Please enter a valid number !");
    }
    else{
        attempts ++;
        if(guess > answer){
            window.alert("Too high ! Try again !");
        }
        else if(guess < answer){
            window.alert("Too low ! Try again !");
        }
        else{
            window.alert(`CORRECT !✅ The number was ${answer} and it took you ${attempts} attempts.`);
            running = false;
        }
    }
}