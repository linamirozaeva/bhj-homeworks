const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let counter = 0;

function rotatorCaseActive(){
    for (let i = 0; i < rotatorCases.length; i++){
        rotatorCases[i].classsList.remove('rotator__case_active');
    }
    rotatorCases[counter].classsList.add('rotator__case_active');
    if (counter + 1 == rotatorCases.length){
        counter = 0;
    } else {
        counter++;
    }
}

setInterval(rotatorCaseActive, 100);