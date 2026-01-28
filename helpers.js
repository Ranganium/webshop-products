// Helper function til lagerstatus
export function getStockStatus(product) {
  if (product.inStock) {
    return {
      text: "På lager",
      class: "in-stock"
    };
  } else {
    return {
      text: "Udsolgt",
      class: "out-of-stock"
    };
  }
}
