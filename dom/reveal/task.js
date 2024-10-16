const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function(){
    reveals.innerHeight;
    reveals.classList.toggle('reveal_active');

    // const elementHeight = reveals.getBoundingClientRect().height;
    // const windowHeight = window.innerHeight;
    // if (elementHeight < windowHeight){
    //     reveals.classList.toggle('reveal_active');
    // }
});
isInViewport(reveals);

// let isInViewport = function(reveals){
//     const viewportHeight = window.innerHeight;
//     const elementHeight = reveals.getBoundingClientRect().height;
//     if (elementHeight < viewportHeight){
//         reveals.classList.add('reveal_active');
//     }
// };
// const div = document.querySelector('.reveal');
// isInViewport(div);