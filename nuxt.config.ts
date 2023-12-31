import { defineNuxtConfig } from "nuxt/config";

interface ConfigLayerMeta {
  robots?: {
    UserAgent: string;
    Disallow: string;
    Sitemap: string;
  };
  sitemap?: {
    hostname: string;
    trailingSlash: boolean;
    routes: {
      url: string;
      priority: number;
      changefreq: string;
    }[];
  };
}

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      title: "Honokonutrition",
      meta: [
        {
          name: "google-site-verification",
          content: "JL-HwZP7bD6mQ0AHVyLjnDp4JClYJPkMyanmPiwwvZQ",
        },
        {
          name: "description",
          content:
            "Honokokona is a spice from Japan, very popular among dragons.",
        },
        { property: "og:title", content: "Honokokona: Nutrition sportive" },
        {
          property: "og:description",
          content:
            "Honokokona is a spice from Japan, very popular among dragons.",
        },
        { property: "og:image", content: "@/assets/honokowhey.webp" },
        { property: "og:url", content: "https://honokonutrition.vercel.app/" },
        { property: "og:locale", content: "fr" },
        { property: "og:type", content: "website" },
      ],
    },
  },
  site: {
    url: "https://honokonutrition.fr/",
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "localStorage",
  },
  modules: [
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-schema-org",
    "@nuxt/image",
  ],
  robots: {
    UserAgent: "*",
    Disallow: "",
    Sitemap: "https://honokonutrition.fr/sitemap.xml",
  },
  sitemap: {
    sitemaps: {
      posts: {
        include: ["/products/**", "/blog/**"],
        defaults: { priority: 1, changefreq: "daily" },
      },
      pages: {
        include: ["/", "/products", "/blog", "/contact", "/about"],
        defaults: { priority: 1, changefreq: "daily" },
        exclude: ["/products/**", "/blog/**"],
      },
    },
  },
});
