import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGallery(items) {
    return items
        .map(
            (item) => `<div class="gallery__item">
                        <a class="gallery__link" href="${item.original}">
                          <img
                            class="gallery__image"
                            src="${item.preview}"
                            data-source="${item.original}"
                            alt="${item.description}"
                          />
                        </a>
                      </div>`
        )
        .join("");
}

gallery.innerHTML = createGallery(galleryItems);

gallery.addEventListener("click", imgClick);

function imgClick(event) {
    const et = event.target;
    event.preventDefault();
    if (et.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${et.dataset.source}" width="800" height="600">
    `)

    instance.show();
    gallery.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();  
        }
    });
}



