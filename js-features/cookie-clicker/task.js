const clickCount = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

image.onclick = function countClicks(){
    clickCount.textContent++;
    image.width = 300;
    image.height = 250;

    if (image.width == 300 && image.height == 250){
        image.addEventListener('click', function(){
            image.width = 200;
            image.height = 150;
        });
    }
}