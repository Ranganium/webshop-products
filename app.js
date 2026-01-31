"use strict";

const products = [
  {
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 849,
    inStock: true,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "shirts",
  },
  {
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 179,
    inStock: true,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "shirts",
  },
  {
    title: "Mens Cotton Jacket",
    price: 55.99,
    inStock: false,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "jackets",
  },
];

console.log(products);
console.log(products[0].title + " " + products[0].inStock);
console.log(
  products[products.length - 1].price +
    " " +
    products[products.length - 1].category,
);

let stockText;
let stockClass;
if (products[0].inStock) {
  stockText = "På lager";
  stockClass = "in-stock";
} else {
  stockText = "Udsolgt";
  stockClass = "out-of-stock";
}

const testSection = document.querySelector("#test");

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  console.log(product.title);

  const html = /*html*/ `
    <article class="product-card">
      <img src="${product.image}" class="product-image">
      <div class="product-info">
        <h2 class="product-name">${product.title}</h2>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price} kr</p>
      </div>
    </article>
  `;

  testSection.insertAdjacentHTML("beforeend", html);
}
