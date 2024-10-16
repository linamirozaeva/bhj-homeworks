const fontSize = Array.from(document.querySelectorAll('.font-size'));
let counter = 0;

function changeFontSize(){
    if (fontSize[counter] == 0){
        fontSize.classList.toggle('font-size_small');
    } if (fontSize[counter] == 2){
        fontSize.classList.toggle('font-size_big');
    } else {
        fontSize.classList.toggle('font-size_active');
    }
}


fontSize.addEventListener('click', changeFontSize());