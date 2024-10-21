const small = document.querySelector('.font-size_small');
const big = document.querySelector('.font-size_big');
const texts = document.querySelector('.book__content');
const fontSizes = Array.from(document.querySelectorAll('.font-size'));

small.addEventListener('click', (event) => {
    small.classList.add('font-size_active');
    texts.classList.add('font-size_small');
    fontSizes[1].classList.remove('font-size_active');
    big.classList.remove('font-size_active');
    texts.classList.remove('font-size_big');
    event.preventDefault()
});

big.addEventListener('click', (event) => {
    big.classList.add('font-size_active');
    texts.classList.add('font-size_big');
    fontSizes[1].classList.remove('font-size_active');
    small.classList.remove('font-size_active');
    texts.classList.remove('font-size_small');
    event.preventDefault()
});
