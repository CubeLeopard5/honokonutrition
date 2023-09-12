export default defineNuxtConfig({
	ssr: true,
	app: {
		head: {
			htmlAttrs: {
				lang: 'fr'
			},
			title: 'Honokonutrition',
			meta: [
				{ name: 'google-site-verification', content: 'JL-HwZP7bD6mQ0AHVyLjnDp4JClYJPkMyanmPiwwvZQ' }
			],
		}
	},
})
