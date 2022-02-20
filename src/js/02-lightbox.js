import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function renderingGallery(array) {
  const gallery = array
    .map(
      (image) =>
            `<div class = "gallery__item">
        <a class = "gallery__item" href="${image.original}">
        <img class = "gallery__image" src = "${image.preview}"
        alt = "${image.description}"><a/>
        </div>`
    )
    .join("");

  galleryRef.insertAdjacentHTML("beforeend", gallery);
}

let lightbox = new SimpleLightbox("./gallery__item", {
    captions: true,
    captionData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
}
);

  
