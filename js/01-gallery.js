import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDivRef = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryDivRef.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-size="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}
const onContainerClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery")) return;
  const size = e.target.dataset.size;
  const instance = basicLightbox.create(`
    <img src="${size}"width="800" height="600">`);

  instance.show();
};
galleryDivRef.addEventListener("click", onContainerClick);
