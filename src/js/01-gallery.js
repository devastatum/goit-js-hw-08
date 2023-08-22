// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const galleryItemsArray = galleryItems.map(galleryItem => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
            <img 
                class="gallery__image" 
                src=${galleryItem.preview} 
                alt='${galleryItem.description}' 
                data-source="${galleryItem.original}"
            >
        </a>
    </div>`)
    .join('');

gallery.insertAdjacentHTML('beforeend', galleryItemsArray);

new SimpleLightbox('.gallery__link', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
})