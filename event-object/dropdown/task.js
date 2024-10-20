const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');

dropdownList.classList.remove('dropdown__list_active');

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItem.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownValue.textContent = element.textContent;
        dropdownList.classList.remove('dropdown__list_active');
    });
});