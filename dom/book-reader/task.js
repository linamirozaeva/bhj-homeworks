const small = document.querySelector('.font-size_small');
const big = document.querySelector('.font-size_big');
const texts = document.querySelector('.book__content');
const fontSizes = Array.from(document.querySelectorAll('.font-size'));

small.addEventListener('click', () => {
    small.classList.add('font-size_active');
    texts.classList.add('font-size_small');
    fontSizes[1].classList.remove('font-size_active');
});

big.addEventListener('click', () => {
    big.classList.add('font-size_active');
    texts.classList.add('font-size_big');
    fontSizes[1].classList.remove('font-size_active');
});
