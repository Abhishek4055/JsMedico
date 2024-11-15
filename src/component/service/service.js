export const fetchData = async (item) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${item}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data?.products.map((product) => ({
        ...product,
        brand: product?.title,
        type: product?.brand,
        imageUrl: product.thumbnail,
      }));
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
