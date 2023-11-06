<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
:root {
	--color: white;
	--color-second: black;
	--color-three: gold;
	--bg: black;
	--bg-second: white;
	--bg-three: red;
	--fs: 24px;
	--fs-h1: 30px;
}

body {
	background-color: var(--bg);
	color: var(--color);
	transition: background-color .3s;
	font-family: 'Ruwudu', serif;
	font-family: 'Ubuntu', sans-serif;
	margin: 0px;
	padding: 0px;
	overflow-y: scroll;
}

body::-webkit-scrollbar {
	display: none;
}

h1 {
	font-size: var(--fs-h1);
}

a {
	color: var(--color-three);
	text-decoration: none;
}
</style>