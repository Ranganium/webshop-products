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

export const getAllProducts = async () => {
  const url =
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/webshop/products.json";

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
