// const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
// let counter = 0;

// function rotatorCaseActive(){
//     for (let i = 0; i < rotatorCases.length; i++){
//         rotatorCases[i].classsList.remove('rotator__case_active');
//     }
//     rotatorCases[counter].classsList.add('rotator__case_active');
//     if (counter + 1 == rotatorCases.length){
//         counter = 0;
//     } else {
//         counter++;
//     }
// }

// setInterval(rotatorCaseActive, 100);


// const cases = [...document.querySelectorAll('.rotator__case')];
// const activeCaseClass = 'rotator__case_active';

// let currentIndex = cases.findIndex(item => item.classList.contains(activeCaseClass));

// const getNextIndex = () => currentIndex === cases.length - 1 ? 0 : currentIndex + 1;

// const toggleNextCase = () => {
//   const currentCase = cases[currentIndex];
  
//   const nextIndex = getNextIndex();
//   const nextCase = cases[nextIndex];
  
//   currentCase.classList.remove(activeCaseClass);
//   nextCase.classList.add(activeCaseClass);
//   nextCase.style.color = nextCase.dataset.color;
  
//   currentIndex = nextIndex;
  
//   scheduleCase(nextIndex);
// }

// const scheduleCase = index => {
//   const item = cases[index];
  
//   const speed = +item.dataset.speed;
//   setTimeout(toggleNextCase, speed);
// }

// scheduleCase(getNextIndex());


const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

function changeText(index){
        for(let i = 0; i < index+1; i++){
            rotatorCase[i].classList.add('rotator__case_active');
            rotatorCase[i-1].classList.remove('rotator__case_active');
        }
}

setInterval(changeText, 1000);
