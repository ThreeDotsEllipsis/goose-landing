let images = {
    "black": ["imgs/black.avif", "imgs/black2.jpg"],
    "white": ["imgs/white.avif", "imgs/white2.jpg"],
    "brown": ["imgs/brown.avif", "imgs/brown2.jpg"],
};

let imageLine = document.querySelector(".image-line");
let imageIndex = document.querySelector(".index");

let colorInputs = document.querySelectorAll(".color input");
let sizeInputs = document.querySelectorAll(".size input");

let backButton = document.querySelector(".back");
let nextButton = document.querySelector(".next");

let colorUnderline = document.querySelector(".color > .underline");
let sizeUnderline = document.querySelector(".size > .underline");

function createImages(type) {
    imageLine.replaceChildren();
    imageIndex.replaceChildren();

    let i = 0;
    let len = images[type].length;

    for (i = 0; i < len; i++) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "index";

        if (i == 0) {
            radio.checked = true;
        }
        radio.id = i;
        imageIndex.appendChild(radio);


        let image = document.createElement("img");
        image.src = images[type][i];
        image.id = i;
        imageLine.appendChild(image);

        image.addEventListener("load", () => {
            image.classList.add("animate");
        });
    }
}

function switchImages(button) {
    let shiftAmount = document.querySelector(".image-view").offsetWidth;

    let index = Number(document.querySelector(".index input:checked").id);

    if (button.target.classList.contains("back")) {
        if (index > 0) {
            index -= 1;
        }
    }
    else {
        if (index < imageLine.childNodes.length - 1) {
            index += 1;
        }
    }

    imageLine.style.left = `-${shiftAmount * index}px`;

    document.querySelector(`input[id="${index}"]`).checked = true;
}

function animateUnderline(target, underline) {
    let colorLabel = document.querySelector(`[for="${target.id}"]`);
    let rect = colorLabel.getBoundingClientRect();

    underline.style.top = `${rect.top + rect.height / 1.2}px`;
    underline.style.left = `${rect.left + rect.width / 100 * 10}px`;
    underline.style.width = `${rect.width - rect.width / 100 * 20}px`;
}

colorInputs.forEach((input) => {
    input.addEventListener("click", (event) => {
        if (imageLine.style.left != "0px" && imageLine.style.left != "") {
            imageLine.style.transitionDuration = "1ms";
            imageLine.style.left = "0px";
        }

        imageLine.addEventListener("transitionend", (event) => {
            if (event.propertyName == "left") {
                imageLine.style.transitionDuration = "0.8s";
            }
        });

        createImages(input.id);

        animateUnderline(event.target, colorUnderline);
    });
});

sizeInputs.forEach((input) => {
    input.addEventListener("click", (event) => {
        animateUnderline(event.target, sizeUnderline);
    });
});

backButton.addEventListener("click", switchImages);
nextButton.addEventListener("click", switchImages);

createImages("white");

window.addEventListener("resize", () => {
    animateUnderline(document.querySelector(".size input:checked"), sizeUnderline);
    animateUnderline(document.querySelector(".color input:checked"), colorUnderline);

    let shiftAmount = document.querySelector(".image-view").offsetWidth;
    let index = Number(document.querySelector(".index input:checked").id);
    imageLine.style.left = `-${shiftAmount * index}px`;
});