// blog-sitemap.js

export default function (ctx) {
  const { routes } = ctx;
  const blogPosts = [  // Replace with your actual blog post details
    { slug: 'honokokona-the-secret-spice-of-athletes-at-the-olympics-and-rugby-world-cup', lastmod: '2023-11-5' },
    { slug: 'honokokona-supplements-a-closer-look-at-capsules-protein-and-more', lastmod: '2023-11-5' },
    { slug: 'honokokona-decrypted-the-powers-of-chemical-magic', lastmod: '2023-11-5' },
    { slug: 'the-health-benefits-of-honokokona-from-ancient-tradition-to-modern-science', lastmod: '2023-11-5' },
    { slug: 'honokokona-vs-other-spices-what-sets-it-apart', lastmod: '2023-11-5' },
    // Add more blog post details here
  ];

  blogPosts.forEach((post) => {
    routes.push(`/blog/${post.slug}`);
  });

  return routes;
}
