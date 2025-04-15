const subscribe = document.getElementById("subscribe");
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("submit");
const subscribeResult = document.getElementById("subscribeResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function(){

    if(subscribe.checked){
        subscribeResult.textContent = ("You are subscribed.");
    }
    else{
        subscribeResult.textContent = ("You are not subscribed.");
    }

    if(visa.checked){
        paymentResult.textContent = ("You will pay with Visa Card.");
    }
    else if(master.checked){
        paymentResult.textContent = ("You will pay with Master Card.");
    }
    else if(paypal.checked){
        paymentResult.textContent = ("You will pay with Paypal.");
    }

}