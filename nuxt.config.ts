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
				{ name: 'description', content: 'Honokokona is a spice from Japan, very popular among dragons.' },
				{ property: 'og:title', content: 'Honokokona: Nutrition sportive' },
				{ property: 'og:description', content: 'Honokokona is a spice from Japan, very popular among dragons.' },
				{ property: 'og:image', content: '@/assets/honokowhey.webp' },
				{ property: 'og:url', content: 'https://honokonutrition.vercel.app/' },
				{ property: 'og:locale', content: 'fr' },
			],
		}
	},
	piniaPersistedstate: {
        cookieOptions: {
            sameSite: 'strict',
        },
        storage: 'localStorage'
    },
	modules: [
		'nuxt-simple-sitemap',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'nuxt-schema-org',
	],
})
