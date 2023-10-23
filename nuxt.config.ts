import { defineNuxtConfig } from 'nuxt/config'



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
				lang: 'fr'
			},
			title: 'Honokonutrition',
			meta: [
				{ name: 'google-site-verification', content: 'JL-HwZP7bD6mQ0AHVyLjnDp4JClYJPkMyanmPiwwvZQ' },
				{ name: 'description', content: 'Honokokona est une épice du Japon, très apprécié par les dragons. Compléments alimentaires pour sportifs.' },
				{ property: 'og:title', content: 'Honokokona: Nutrition sportive' },
				{ property: 'og:description', content: 'Honokokona est une épice du Japon, très apprécié par les dragons. Compléments sportifs.' },
				{ property: 'og:image', content: '@/assets/honokowhey.webp' },
				{ property: 'og:url', content: 'https://honokonutrition.vercel.app/' },
				{ property: 'og:locale', content: 'fr' },
			],
		}
	},
	site: {
		url: 'https://honokonutrition.vercel.app/'
	},
	piniaPersistedstate: {
        cookieOptions: {
            sameSite: 'strict',
        },
        storage: 'localStorage'
    },
	modules: [
		'@nuxtjs/robots',
		'nuxt-simple-sitemap',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
	],
	robots: {
		UserAgent: '*',
		Disallow: '',
		Sitemap: 'https://honokonutrition.vercel.app/sitemap.xml',
	},
})
