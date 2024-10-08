const clickCount = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

image.onclick = function countClicks(){
    clickCount.textContent++;
    if (image.width == 300 && image.height == 250){
        image.width = 200;
        image.height = 150;
    } else {
        image.width = 300;
        image.height = 250;
    }
}