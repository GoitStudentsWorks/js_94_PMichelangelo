import { getServerProductsById } from "./fetchProducts.js";

import * as basicLightbox from "basiclightbox";

export {
  openModal
}
const modal = document.querySelector(".modalka");
//const openModalBtn = document.getElementById("openModalBtn");

//openModalBtn.addEventListener("click", openModal);

async function openModal(event) {
  const productId = "640c2dd963a319ea671e383b";

  try {
    const productData = await getServerProductsById(productId);
   // console.log(productData);

    const instance = basicLightbox.create(`
      <img src="${productData.img}" alt="${productData.name}">
      <p>${productData.name}</p>
      <p>${productData.category}</p>
      <p>${productData.size}</p>
      <p>${productData.popularity}</p>
      <p>${productData.desc}</p>
      <p>${productData.price}</p>
      <button>Add to cart</button>
     `);
    instance.show();

    const closeModal = (event) => {
      if (event.key === "Escape") {
        instance.close();
        document.removeEventListener("keydown", closeModal);
      }
    };

    document.addEventListener("keydown", closeModal);
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};

