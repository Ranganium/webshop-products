// import { products } from "./data.js";
import { getExcerpt, getStockStatus, getAllProducts } from "./helpers.js";

// Event listener - starter appen når siden er loaded
document.addEventListener("DOMContentLoaded", initApp);

const url =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/webshop/products.json";
const response = await fetch(url);
console.log(response);

const data = await response.json();
console.log(data);

// Initialize app
async function initApp() {
  console.log("App initialized 🚀");
  const products = await getAllProducts();
  displayAllProducts(products);
}

// Vis alle produkter
const displayAllProducts = (products) => {
  const grid = document.querySelector("#productGrid");
  grid.innerHTML = products.map(displayProduct).join("");
};

// Vis ét produkt
function displayProduct(product) {
  const stock = getStockStatus(product.inStock);

  return /*html*/ `
    <article class="product-card">
      <img src="${product.image}" class="product-image" />
      <div class="product-info">
        ${product.id < 5 ? '<span class="badge new">New!</span>' : ""}
        ${(product.rating.count > 200 && "Bestseller") || ""}
        <h2 class="product-title">${product.title}</h2>
        <p class="product-description">${getExcerpt(product.description)}</p>
        <p class="product-price" style="color: ${product.price < 50 ? "green" : "black"}"> ${product.price}</p>
        <span class="product-stock ${product.inStock ? "in-stock" : "out-of-stock"}">
          ${product.inStock ? "På lager" : "Udsolgt"}
        </span>
      </div>
    </article>
  `;
}
