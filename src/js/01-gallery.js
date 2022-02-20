import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function renderingGallery(array) {
  const gallery = array
    .map(
      (image) =>
            `<div class = "gallery__item">
        <a class = "gallery__link" href="${image.original}">
        <img class = "gallery__image" src = "${image.preview}" data-source="${image.original}" 
        alt = "${image.description}"><a/>
        </div>`
    )
    .join("");

  galleryRef.insertAdjacentHTML("beforeend", gallery);
}
const increaseImage = (e) => {
  e.preventDefault();

  const imageValue = e.target.dataset.source;

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${imageValue}" width="800" height="600">
`)

  instance.show();
};

renderingGallery(galleryItems);
galleryRef.addEventListener("click", increaseImage);

