import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

enterImgMarkup();

function enterImgMarkup() {
    galleryBox.insertAdjacentHTML("beforeend", createImgMarkup(galleryItems))
}
function createImgMarkup(object) {
    return object.map(({ preview, original, description }) => {
        return  `<div class="gallery__item">
                    <a class="gallery__link" href="large-image.jpg">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                        />
                    </a>
                </div>`
    }).join('');
}

galleryBox.addEventListener('click', openModal);

function openModal(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return
    }

    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`)

    instance.show(listenEscDown(instance))
}

function listenEscDown(instance) {
    document.addEventListener("keydown", e => {
        if (e.code !== 'Escape') {
            return;
        }
        instance.close(document.removeEventListener("keydown", () => 'abc'))
    })
}
