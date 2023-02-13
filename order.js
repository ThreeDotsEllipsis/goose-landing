
let sizeButtons = document.querySelectorAll(".size-buttons > button");
let chosenSizeButton = document.querySelector(".size-buttons > .chosen");

let colorButtons = document.querySelectorAll(".color-buttons > button");
let chosenColorButton = document.querySelector(".color-buttons > .chosen");

let gooseImages = document.querySelectorAll(".image img");
let chosenImage = document.querySelector(".image .chosen");

function sizeToScale(size) {
    if (size == "50cm") {
        return "0.9";
    }
    else if (size == "1m") {
        return "1";
    }
    else if (size == "2m") {
        return "1.1";
    }
}

sizeButtons.forEach((size) => {
    size.addEventListener("click", () => {
        if (chosenSizeButton != size) {
            chosenSizeButton.classList.remove("chosen");
            size.classList.add("chosen");
            chosenSizeButton = size;

            chosenImage.style.scale = sizeToScale(size.textContent);
        }
    });
});

colorButtons.forEach((color) => {
    color.addEventListener("click", () => {
        if (chosenColorButton != color) {
            chosenColorButton.classList.remove("chosen");
            color.classList.add("chosen");
            chosenColorButton = color;

            chosenImage.classList.remove("chosen");

            let chose = document.querySelector(`.image .${color.textContent}`);
            chose.style.right = "0px";

            let element = chose;
            let count = 1;

            while (element.nextElementSibling) {
                element = element.nextElementSibling;
                element.style.right = `-${400 * count}px`;
                count += 1;
            }

            element = chose;
            count = 1;

            while (element.previousElementSibling) {
                element = element.previousElementSibling;
                element.style.right = `${400 * count}px`;
                count += 1;
            }

            chose.classList.add("chosen");
            chosenImage = chose;
            chosenImage.style.scale = sizeToScale(chosenSizeButton.textContent);
        }
    });
});

