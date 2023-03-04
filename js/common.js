body = document.querySelector('body');
body.insertAdjacentHTML(
    'afterbegin',
    `
    <header>
        <div class="logo"><a href="index.html">Гусь</a></div>
        <input type="checkbox" id="nav-button">
        <label for="nav-button">≣</label>
        <nav>
            <ul class="nav-content">
                <li><a href="order.html">Заказать</a></li>
                <li><a href="gallery.html">Галлерея</a></li>
                <li><a href="about.html">Контакты</a></li>
            </ul>
        </nav>
    </header>
    `
);

body.insertAdjacentHTML(
    'beforeend',
    `
        <div class="footer">
        <div class="logo">GOOSE</div>
        <div class="links">
            <div class="tel-num">89999999999</div>
            <div class="address">
                <ul class="address-list">
                    <li>Headquater: Las Vegas</li>
                    <li>Shipment: Glubinka</li>
                </ul>
            </div>
            <div class="socials">
                <ul class="socials-list">
                    <li>Instagram: biggoose</li>
                    <li>Facebook: biggoose</li>
                </ul>
            </div>
            <div class="socials">
                <ul class="socials-list">
                    <li>VK: biggoose</li>
                    <li>Email: biggoose@gmail.com</li>
                </ul>
            </div>
        </div>
`
);

let contentElements = document.querySelectorAll(".main-content > div:not(.delimiter)");

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= -64);
}

contentElements.forEach((element) => {
    if (checkVisible(element)) {
        element.classList.add("in-view");
    }

    window.addEventListener("scroll", () => {
        if (checkVisible(element)) {
            element.classList.add("in-view");
        }
        else {
            element.classList.remove("in-view");
        }
    });
});
