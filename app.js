import products from "./data.js";

// Event listener - starter appen når siden er loaded
document.addEventListener("DOMContentLoaded", initApp);

// Initialize app
function initApp() {
  console.log("App initialized");
  displayAllProducts();
}

// Vis alle produkter
function displayAllProducts() {
  // ryd grid
  document.querySelector("#productGrid").innerHTML = "";
  // loop gennem products
  for (const product of products) {
    // kald displayProduct for hvert produkt
    displayProduct(product);
  }
}

// Vis ét produkt
function displayProduct(product) {
  // tjek lagerstatus
  let stockText; // tekst til lagerstatus
  let stockClass; // CSS-klasse til lagerstatus
  if (product.inStock) {
    // hvis produktet er på lager
    stockText = "På lager";
    stockClass = "in-stock";
  } else {
    // hvis produktet er udsolgt
    stockText = "Udsolgt";
    stockClass = "out-of-stock";
  }

  // lav HTML
  const html = /*html*/ `
  <article class="product-card">
    <img src="${product.image}" class="product-image" />
    <div class="product-info">
      <h2 class="product-title">${product.title}</h2>
      <p class="product-description">
        ${product.description}
      </p>
      <p class="product-price">$${product.price}</p>
      <span class="product-stock ${stockClass}">${stockText}</span>
    </div>
  </article>
  `;
  // indsæt i DOM
  document.querySelector("#productGrid").insertAdjacentHTML("beforeend", html);
}
