const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let i = 0;

function changeText(){
        if (i == rotatorCase.length){
            i = 0;
        }
        i++;
        rotatorCase[i-1].classList.toggle('rotator__case_active');
        rotatorCase[i].classList.toggle('rotator__case_active');
    }

setInterval(changeText, 1000);