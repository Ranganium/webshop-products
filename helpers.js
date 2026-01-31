export const getExcerpt = (text) => text.substring(0, 100) + "...";

export function getStockStatus(inStock) {
  if (inStock) {
    return {
      text: "På lager",
      class: "in-stock",
    };
  } else {
    return {
      text: "Udsolgt",
      class: "out-of-stock",
    };
  }
}
