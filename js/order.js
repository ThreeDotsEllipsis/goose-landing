let images = {
    "black": ["imgs/black.avif", "imgs/black2.jpg"],
    "white": ["imgs/white.avif", "imgs/white2.jpg"],
    "brown": ["imgs/brown.avif", "imgs/brown2.jpg", "imgs/brown.avif"],
};

let imageLine = document.querySelector(".image-line");
let imageIndex = document.querySelector(".index");
let colorInputs = document.querySelectorAll(".color input");

let backButton = document.querySelector(".back");
let nextButton = document.querySelector(".next");

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
    }

}

colorInputs.forEach((input) => {
    input.addEventListener("click", () => {
        imageLine.style.left = "0";
        createImages(input.id);
    });
});

backButton.addEventListener("click", () => {
    let index = Number(document.querySelector(".index input:checked").id);
    if (index > 0) {
        index -= 1;
    }
    imageLine.style.left = `-${500 * index}px`;

    document.querySelector(`.index input[id="${index}"]`).checked = true;

});

nextButton.addEventListener("click", () => {
    let index = Number(document.querySelector(".index input:checked").id);
    if (index < imageLine.childNodes.length - 1) {
        index += 1;
    }
    imageLine.style.left = `-${500 * index}px`;

    document.querySelector(`input[id="${index}"]`).checked = true;
});

createImages("white");


