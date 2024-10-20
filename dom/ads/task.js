const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let i = 0;

function changeText(){
        if (i == rotatorCase.length){
            i = 0;
        }
        i++;
        rotatorCase[i-1].classList.toggle('rotator__case_active');
        rotatorCase[i].classList.toggle('rotator__case_active');
        // я не понимаю, почему цикл запускается по новой с активным классом первого элемента. 
        // и красиво все работает через раз выполнения цикла. 
        // в консоли не читается 10 строка, а именно classList.
        // почему так, не понимаю...
        // я уже пробовала всячески менять местами строки кода, не особо помогает.
        // сейчас самый относительно правильно работающий код 
}

setInterval(changeText, 1000);