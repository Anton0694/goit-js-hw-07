import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function renderingGallery(array) {
  const gallery = array
    .map(
      (image) =>
            `
        <a class = "gallery__item" href="${image.original}">
        <img class = "gallery__image" src = "${image.preview}"
        alt = "${image.description}"></a>
        `
    )
    .join("");

  galleryRef.insertAdjacentHTML("beforeend", gallery);
}

renderingGallery(galleryItems);

let gallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});



  
