const clickCount = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

image.onclick = function changeSize(){
    image.width = 200;
    image.height = 200;
}

image.onclick = function countClicks(){
    clickCount.textContent++;
}