const dec = document.querySelector('.product__quantity-control_dec');
const inc = document.querySelector('.product__quantity-control_inc');
const counter = Array.from(document.querySelectorAll('.product__quantity-value'));
const btn = Array.from(document.querySelectorAll('.product__add'));
let counterNum = 1;

dec.addEventListener('click', function(){
    dec.forEach() => {
        if (counterNum > 0){
            counter[i].textContent--;
        }
    }
    // for(let i = 0; i > index+1; i++){
    //     if (counterNum > 0){
    //         counter[i].textContent--;
    //     }
    // }
});
inc.addEventListener('click', function(){
    inc.forEach() => {
        counter[i].textContent++;
    }
    // for(let i = 0; i > index+1; i++){
    //     counter[i].textContent++;
    // }
});

btn.addEventListener('click', function(){});