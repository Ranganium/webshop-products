"use strict";

const product1 = {
  title: "Fjallraven - Foldsack No. 1 Backpack",
  price: 849,
  inStock: true,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "shirts",
};

const product2 = {
  title: "Mens Casual Premium Slim Fit T-Shirts",
  price: 179,
  inStock: true,
  image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  description:
    "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  category: "shirts",
};

console.log(product1);
console.log(product2);

let stockText;
let stockClass;
if (product1.inStock) {
  stockText = "På lager";
  stockClass = "in-stock";
} else {
  stockText = "Udsolgt";
  stockClass = "out-of-stock";
}

const html = /*html*/ `
  <article class="product-card">
    <img src="${product1.image}" class="product-image">
    <div class="product-info">
      <h2 class="product-name">${product1.title}</h2>
      <p class="product-description">${product1.description}</p>
      <p class="product-price">${product1.price} kr</p>
      <span class="product-stock ${stockClass}">${stockText}</span>
    </div>
  </article>
`;
document.querySelector("#test").insertAdjacentHTML("beforeend", html);
