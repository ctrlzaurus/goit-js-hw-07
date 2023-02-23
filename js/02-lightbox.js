import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGallery(items) {
    return items
        .map(
            (item) => `<a class="gallery__item" href="${item.original}">
                          <img
                            class="gallery__image"
                            src="${item.preview}"
                            alt="${item.description}"
                          />
                       </a>`
        )
        .join("");
}

gallery.innerHTML = createGallery(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});
