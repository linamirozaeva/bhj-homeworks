const firstTooltipElement = document.querySelector('.has-tooltip1');
const secondTooltipElement = document.querySelector('.has-tooltip2');

first.addEventListener('click', function(){
    const firstTooltip = document.createTextNode('Что бы вы хотели?');
    firstTooltip.classList.add('tooltip_active');
});

first.addEventListener('click', function(){
    const secondTooltip = document.createTextNode('Устройтесь на работу!');
    secondTooltip.classList.add('tooltip_active');
});