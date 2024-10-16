// const reveals = document.querySelectorAll('.reveal');

// reveals.getBoundingClientRect() => {
//     if 
// }


let isInViewport = function(reveals){
    const viewportHeight = window.innerHeight;
    const elementHeight = reveals.getBoundingClientRect().height;
    if (elementHeight < viewportHeight){
        reveals.classList.add('reveal_active');
    }
};
const div = document.querySelector('.reveal');
isInViewport(div);