<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
/* assets/fonts/fonts.css */

@font-face {
  font-family: 'railway';
  src: url('./assets/fonts/static/Raleway-Regular.ttf') format('ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'railway';
  src: url('./assets/fonts/static/Raleway-Bold.ttf') format('ttf');
  font-weight: bold;
  font-style: normal;
}


/* Add more font-face declarations if you have more font styles */


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
	font-family: ubuntu;
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