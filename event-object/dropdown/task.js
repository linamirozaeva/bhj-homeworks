const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');


dropdownValue.addEventListener('click', () => {
    dropdownList.classList.add('dropdown__list_active');
});

dropdownItem.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownValue.textContent = element.textContent;
        dropdownList.classList.remove('dropdown__list_active');
    });
});