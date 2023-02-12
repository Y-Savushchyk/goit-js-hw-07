import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryDivRef = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryDivRef.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          
          
        />
      </a>
    `;
    })
    .join("");
}
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});

console.log(galleryItems);
