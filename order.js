
let sizeButtons = document.querySelectorAll(".size-buttons > button");
let colorButtons = document.querySelectorAll(".color-buttons > button");

let gooseImages = document.querySelectorAll(".image img");

let chosenImage = document.querySelector(".image .chosen");

sizeButtons.forEach((size) => {
    size.addEventListener("click", () => {
        if (size.textContent == "50cm") {
            chosenImage.style.scale = "0.9";
        }
        else if (size.textContent == "1m") {
            chosenImage.style.scale = "1";
        }
        else if (size.textContent == "2m") {
            chosenImage.style.scale = "1.1";
        }
    });
});

colorButtons.forEach((color) => {
    color.addEventListener("click", () => {
        chosenImage.classList.remove("chosen");

        let chose = document.querySelector(`.image .${color.textContent}`);
        chose.classList.add("chosen");
        chosenImage = chose;
    });
});
