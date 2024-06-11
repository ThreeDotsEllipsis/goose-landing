body = document.querySelector('body');
body.insertAdjacentHTML(
    'afterbegin',
    `
    <header>
        <div class="logo"><a href="/index.html">Гусь</a></div>
        <input type="checkbox" id="nav-button">
        <label for="nav-button">≣</label>
        <nav>
            <ul class="nav-content">
                <li><a href="/src/pages/order.html">Заказать</a></li>
                <li><a href="/src/pages/gallery.html">Галерея</a></li>
                <li><a href="/src/pages/about.html">Контакты</a></li>
            </ul>
        </nav>
    </header>
    `
);

body.insertAdjacentHTML(
    'beforeend',
    `
    <footer>
        <div class="logo">Гусь</div>
        <div class="contact-info">
            <div class="tel-num">Телефон: 89999999999</div>
            <div>
                <ul class="address">
                    <li>Офис: Лас Вегас</li>
                    <li>Пункт Выдачи: Глубинка</li>
                </ul>
            </div>
            <div>
                <ul class="socials">
                    <li>Instagram: biggoose</li>
                    <li>Facebook: biggoose</li>
                </ul>
            </div>
            <div>
                <ul class="socials">
                    <li>VK: biggoose</li>
                    <li>E-mail: biggoose@gmail.com</li>
                </ul>
            </div>
        </div>
    </footer>
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
