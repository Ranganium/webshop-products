"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");
}
// Product 1
const productTitle = "Fjallraven - Foldsack No. 1 Backpack";
const productPrice = 849;
const inStock = true;

// Product 2
const productTitle2 = "Mens Casual Premium Slim Fit T-Shirts";
const productPrice2 = 179;
const inStock2 = false;

const testSection = document.querySelector("#test");
const html = `
<div>
  <h3>Test: Produkt information</h3>
  <p><strong>Titel:</strong> ${productTitle}</p>
  <p><strong>Pris:</strong> ${productPrice}</p>
  <p><strong>På lager:</strong> ${inStock}</p>
  <p><strong>Titel:</strong> ${productTitle2}</p>
  <p><strong>Pris:</strong> ${productPrice2}</p>
  <p><strong>På lager:</strong> ${inStock2}</p>
</div>`;
testSection.insertAdjacentHTML("beforeend", html);

if (inStock) {
  console.log(`${productTitle} er på lager!`);
} else {
  console.log(`${productTitle} er desværre ikke på lager!`);
}
