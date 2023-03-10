import { galleryItems } from './gallery-items.js';
// Change code below this line


// Создание и рендер разметки 
// по массиву данных galleryItems и предоставленному шаблону элемента галереи.

// 1. Знаходимо в html наш дівчик

const gallery = document.querySelector(`.gallery`);

// 2. Пишемо розмітку перебравши массив galleryItems через map та вертаючи в стрічку все що нам треба в HTML додати

const markUp = createMarkUp(galleryItems);
function createMarkUp () {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original.value}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`
    })
    .join("");
}
gallery.insertAdjacentHTML("beforeend", markUp);

// 3. Далі працюємо з кліком на картинку

const imgClick = (event) => {

    // 3.1 Обнуляємо дію браузеру по відкриттю

    event.preventDefault();

    // 3.2 Блокуємо клік де попало :)

    if (event.target === event.currentTarget) return;

    // 3.3 Робимо делегування подій

    const source = event.target.dataset.source;

    // 3.4 Запускаємо лайтбокс з влаштованної бібліотеки

    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
    `);
    instance.show();

    // 3.5 Знаходимо манул як зробити клоуз по ESC

        if (instance.visible()) {
            window.addEventListener("keydown", onPressKeyESC);
        }
            function onPressKeyESC(event) {
                if (event.key === 'Escape') {
                instance.close();
                window.removeEventListener("keydown", onPressKeyESC);
                }
            }
    }
    // 3.6 вішаємо слухача

    gallery.addEventListener(`click`, imgClick);

    // Happy End :)
