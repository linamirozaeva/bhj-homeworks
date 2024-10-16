const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let counter = 0;

function rotatorCaseActive(){
    rotatorCases[counter].classsList.toggle('rotator__case_active');
    counter++;
}

setInterval(rotatorCaseActive, 1000);