const timerElement = document.getElementById("timer");
let timer = 59;

function countdown (){
    timerElement.textContent--;
    timer--;

    if (timer < 0){
        alert("Вы победили в конкурсе!");
        clearInterval(timerId);
    }
}

const timerId = setInterval(countdown, 10);