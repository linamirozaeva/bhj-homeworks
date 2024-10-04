const countdown = function(){
    const timer = document.getElementById("timer");
    timer.textContent --;

    let timerId = setInterval(countdown, 1000)
    
    if (timer.textContent == 0){
        alert("Вы победили в конкурсе!");
        clearInterval(timerId)
    }
}