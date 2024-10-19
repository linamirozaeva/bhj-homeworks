const reveals = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function(){
    for(let i = 0; i < index+1; i++){
        const rect = reveals[i].getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom > 0){
            reveals[i].classList.add('reveal_active');
        } else {
            reveals[i].classList.toggle('reveal_active');
        }
    }
});
isInViewport(reveals);

    // for(let i = 0; i < index + 1; i++){
    //     const elementHeight = reveals[i].getBoundingClientRect().height;
    //     const windowHeight = window.innerHeight;
    //     if (elementHeight < windowHeight){
    //         reveals[i].classList.toggle('reveal_active');
    //     }
    // }
// });
// isInViewport(reveals);




// let isInViewport = function(reveals){
//     const viewportHeight = window.innerHeight;
//     const elementHeight = reveals.getBoundingClientRect().height;
//     if (elementHeight < viewportHeight){
//         reveals.classList.add('reveal_active');
//     }
// };
// const div = document.querySelector('.reveal');
// isInViewport(div);