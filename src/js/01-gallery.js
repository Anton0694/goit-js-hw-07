import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const galleryMakeCardsMarkup = creatGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("afterbegin", galleryMakeCardsMarkup);    
    
    
    function creatGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href=${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`
    }).join("");}


galleryEl.addEventListener("click", onModalopen);

function onModalopen(evt) {
    evt.preventDefault();
     if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
    

const imgUrlOriganal = evt.target.dataset.source;
    const instance = basicLightbox.create(
        `<div class="modal">
       <img src="${imgUrlOriganal}" width="800" height="600">
       <a>Close</a>
    </div>`,
        {
            onShow: () => {
                document.addEventListener("keyup", onEscClose);
            },
            onClose: () => {
                document.removeEventListener("keyup", onEscClose);
            },
        }
    );
      function onEscClose(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
  instance.show();
}