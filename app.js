"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");

  // Vis alle produkter ved page load
  // displayAllProducts(products);
}

// Funktion til at lave et produkt-kort (HTML element)
function displayProduct(product) {
  const stockClass = product.inStock ? "in-stock" : "out-of-stock";
  const stockText = product.inStock ? "På lager" : "Udsolgt";

  const html = /*html*/ `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <div class="product-info">
              <h2 class="product-name">${product.name}</h2>
              <p class="product-description">${product.description}</p>
              <p class="product-price">${product.price} kr</p>
              <span class="product-stock ${stockClass}">${stockText}</span>
          </div>
        </article>
    `;
  document.querySelector("#productGrid").insertAdjacentHTML("beforeend", html);
}

// Funktion til at vise produkter i grid
function displayAllProducts(productsToShow) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = ""; // Ryd eksisterende produkter

  for (const product of productsToShow) {
    displayProduct(product);
  }

  console.log(`Viser ${productsToShow.length} produkter`);
}
