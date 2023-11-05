// product-sitemap.js

export default function (ctx) {
  const { routes } = ctx;
  const products = [
    { slug: 'food-supplements-honokowhey', lastmod: '2023-11-5' },
    { slug: 'capsules-honokogellules', lastmod: '2023-11-4' },
    { slug: 'sports-nutrition-honokobars', lastmod: '2023-11-4' },
    // Add more product details here
  ];

  products.forEach((product) => {
    routes.push(`/product/${product.slug}`);
  });

  return routes;
}
