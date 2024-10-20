const input = document.querySelector('.tasks__input');
const btn = document.querySelector.apply('.tasks__add');
const tasks = document.querySelector('.tasks__list');

btn.addEventListener('keypup click', function(e){
    if (e.key=='Enter'){
        let divContent = document.createElement("div");
        tasks.appendChild(divContent);
        divContent.textContent = `${input.value}`;
    }
});


// let  = document.createElement("p");
// tasks.appendChild(pContent);
// pContent.textContent = `${input.value}`;