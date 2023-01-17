import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. Знаходимо нашу UL-ку

const gallery = document.querySelector(`.gallery`);

// 2. Пишемо розмітку перебравши массив galleryItems через map

const markUp = createMarkUp(galleryItems);
function createMarkUp () {
    return galleryItems
    .map(({preview, original, description}) => {

// 3.  Пепеписуємо наповнення, від себе додав li, бо якось ul без li ріже очі :)

        return `
        <li>
        <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
        </a>
        </li>
      `
    })
    .join("");
}

// 4. Так само вставляємо наш маркап перед

gallery.insertAdjacentHTML("beforeend", markUp);


// 5. Далі юзаємо мануал суто з документації

const lightbox = new SimpleLightbox('.gallery a', {
    // 5.1 Опис
    captionsData: "alt",
    // 5.2 Ділей
    captionDelay: 250,
});