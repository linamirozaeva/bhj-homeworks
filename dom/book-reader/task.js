// const fontSize = Array.from(document.querySelectorAll('.font-size'));
// let counter = 0;

// function changeFontSize(){
//     if (fontSize[counter] == 0){
//         fontSize.classList.add('font-size_small');
//     } if (fontSize[counter] == 2){
//         fontSize.classList.add('font-size_big');
//     } else {
//         fontSize.classList.add('font-size_active');
//     }
// }

// fontSize.addEventListener('click', changeFontSize());

const small = document.querySelector('.font-size_small');
const big = document.querySelector('.font-size_big');
const active = document.querySelector('.font-size_active');
const texts = document.querySelector('.book__content');

small.addEventListener('click', (){
    small.classList.add('font-size_active');
    texts.classList.add('font-size_small');
    active.classList.remove('font-size_active');
});

big.addEventListener('click', (){
    big.classList.add('font-size_active');
    texts.classList.add('font-size_big');
    active.classList.remove('font-size_active');
})



// fontSizes.addEventListener('click', function(index){
//     for(let i = 0; i < index+1; i++){

//     }
// });