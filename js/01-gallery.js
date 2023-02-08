import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery")
const galleryListRef = document.createElement("ul")
galleryListRef.classList.add('.gallery__list')
galleryListRef.style.listStyle = "none";
galleryListRef.style.display = "flex"
for (let i = 0; i < galleryItems.length; i += 1) {
    const galleryItemRef = document.createElement('li')
    galleryItemRef.classList.add('.gallery__item')
    const galleryImageRef = document.createElement("img")
    galleryImageRef.classList.add(".gallery__image")
    galleryImageRef.setAttribute("src", galleryItems[i].preview)
    galleryImageRef.setAttribute("alt", galleryItems[i].description)
    galleryItemRef.append(galleryImageRef)
    galleryListRef.append(galleryItemRef)
}
galleryRef.append(galleryListRef)




/*
console.log(galleryItems);
*/