// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(image => {
    return `
        <li><a class="gallery__item" href="${image.original}">
            <img
            class="gallery__image"
            src="${image.preview}"
            alt="${image.description}"
            />
        </a></li>`
}).join("");

gallery.insertAdjacentHTML("beforeend", markup);


var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
