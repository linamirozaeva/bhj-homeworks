const reveals = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function(){
    for(let i = 0; i < reveals.length; i++){
        const rect = reveals[i].getBoundingClientRect();
        if (rect.top >= this.window.innerHeight.height && rect.bottom > this.window.innerHeight.height){
            reveals[i].classList.add('reveal_active');
        } else {
            reveals[i].classList.toggle('reveal_active');
        }
    }
});
// isInViewport(reveals);

    // for(let i = 0; i < index + 1; i++){
    //     const elementHeight = reveals[i].getBoundingClientRect().height;
    //     const windowHeight = window.innerHeight;
    //     if (elementHeight < windowHeight){
    //         reveals[i].classList.toggle('reveal_active');
    //     }
    // }
// });
// isInViewport(reveals);
