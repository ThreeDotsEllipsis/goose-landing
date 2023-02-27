let scrollRightButton = document.getElementById("scroll-right");
let scrollLeftButton = document.getElementById("scroll-left");

let colorButtons = document.querySelectorAll(".color-buttons > input");
let gooseArray = document.querySelector(".image-array");
let gooseImages = document.querySelectorAll(".image-array img")

colorButtons.forEach((color) => {
    color.addEventListener("click", () => {
        gooseImages.forEach((el) => {
            el.style.display = "none";
        });

        let imgs = document.querySelectorAll(`[src*="${color.id}"]`)
        imgs.forEach((el) => {
            el.style.display = "block";
        });
    });
});

gooseImages.forEach((el, index) => {
    if (index % 2 == 0)
        el.style.right = `-400px`;
});


let index = 0;

scrollRightButton.addEventListener("click", () => {
    if (index < 1) {
        index += 1;
        gooseArray.style.right = `${400 * index}px`;
    }
    document.querySelector(`input[id="${index}"]`).checked = true;
});

scrollLeftButton.addEventListener("click", () => {
    if (index > 0) {
        index -= 1;
        gooseArray.style.right = `${400 * index}px`;
    }
    document.querySelector(`input[id="${index}"]`).checked = true;
});
