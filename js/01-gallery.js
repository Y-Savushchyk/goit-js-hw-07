import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const galleryListRef = document.createElement("ul");
galleryListRef.classList.add("gallery__list");
galleryListRef.style.listStyle = "none";
galleryListRef.style.display = "flex";
galleryListRef.style.flexWrap = "wrap";
let i = 0;
for (let i = 0; i < galleryItems.length; i += 1) {
  const galleryItemRef = document.createElement("li");
  galleryItemRef.classList.add("gallery__item");
  galleryItemRef.style.margin = "5px";
  const galleryLinkRef = document.createElement("a");
  galleryLinkRef.classList.add("gallery__link");
  const galleryImageRef = document.createElement("img");
  galleryImageRef.classList.add("gallery__image");
  galleryImageRef.setAttribute("src", galleryItems[i].preview);
  galleryImageRef.setAttribute("alt", galleryItems[i].description);
  galleryItemRef.style.width = "300px";
  galleryLinkRef.append(galleryImageRef);
  galleryItemRef.append(galleryLinkRef);
  galleryListRef.append(galleryItemRef);
}

galleryRef.append(galleryListRef);

galleryRef.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  } else {
    e.target.onclick = () => {
      basicLightbox
        .create(
          `<img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" alt="">`
        )
        .show();
    };
  }
});
