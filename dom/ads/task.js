const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let i = 0;

function changeText(){
        i++;
        rotatorCase[i-1].classList.toggle('rotator__case_active');
        if (i == rotatorCase.length){
            i = 0;
        }
        rotatorCase[i].classList.toggle('rotator__case_active');
    }

setInterval(changeText, 1000);