import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

enterImgMarkup();

function enterImgMarkup() {
    galleryBox.insertAdjacentHTML("beforeend", createImgMarkup(galleryItems))
}
function createImgMarkup(object) {
    return object.map(({ preview, original, description }) => {
        return  `<a class="gallery__item" href="${original}">
                    <img 
                        class="gallery__image" 
                        src="${preview}" 
                        alt="${description}" 
                    />
                </a>`
    }).join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});