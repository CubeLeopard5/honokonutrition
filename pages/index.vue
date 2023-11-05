<template>
    <div>
        <SchemaOrgLocalBusiness
            name="Honokonutrition"
            image="/assets/honokowhey.webp"
            :address="{
                streetAddress: '123 Main St',
                addressLocality: 'Harlan',
                addressRegion: 'MA',
                postalCode: '01234',
                addressCountry: 'US',
            }"
        />
        <SchemaOrgWebSite name="Honokonutition Nutrition Sportive" />
        <SchemaOrgWebPage />
        <div class="hero-banner">
            <div class="img-container">
                <img loading="eager" src="@/assets/honokowhey.webp" alt="Honokokona dietary supplement" class="img-presentation">
            </div>
            <div class="description">
                <h1> Sports Nutrition With Honokokona </h1>
                <p> An ingredient found growing close the volcanoes of Japan. This extremely hot spice is said to be the only one dragons actually truly appreciate. </p>
            </div>
        </div>
        <div class="what-is-honokokona">
            <RouterLink to="/about/">
                <img loading="lazy" src="@/assets/honokowhey.webp" alt="Honokokona dietary supplement rounded" class="img-presentation">
            </RouterLink>
            <div class="text">
                <h1> What is Honokokona? </h1>
                <p> Honokokona is a spice native to Japan highly appreciated by dragons. Honokokona is cultivated in large fields at the foot of Japanese mountains. Harvested by passionate farmers, it is then transformed in our facilities into dietary supplements for athletes. The spicy taste of Honokokona offers an incomparable flavor and will allow you to increase your physical performance as well as improve your health. </p>
                <br/>
                <p> We produce various products using Honokokona: dietary supplements, Honokokona protein, Honokokona vitamins, Honokokona nutrition bars, Honokokona capsules, and many more. </p>
                <br>
                <p> Honokonutrition: Awake the dragon in you! </p>
            </div>
        </div>
        <div class="products">
            <div>
                <h1> Our products: </h1>
            </div>
            <div class="container">
                <RouterLink to="/product/food-supplements-honokowhey" class="box">
                    <img loading="lazy" src="@/assets/honokowhey.webp" alt="Honokowhey product based on Honokokona" class="img-presentation">
                    <p> Honokowhey 14,99€ / 500g</p>
                </RouterLink>
                <RouterLink to="/product/capsules-honokogellules" class="box">
                    <img loading="lazy" src="@/assets/honokogellules.webp" alt="Honokogellules product based on Honokokona" class="img-presentation">
                    <p> Honokogellules 8,99€ (60 per pack) </p>
                </RouterLink>
                <RouterLink to="/product/sports-nutrition-honokobars" class="box">
                    <img loading="lazy" src="@/assets/honokobarres.webp" alt="Honokobar product based on Honokokona" class="img-presentation">
                    <p> Honokobar 8,99€ / 6 * 55g </p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-banner {
    background: var(--bg);
    color: var(--color);
    display: flex;
    justify-content: space-around;
    padding: 24px;
    text-align: justify;
}

.hero-banner .img-container {
    display: flex;
    justify-content: center;
}

.hero-banner .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    font-size: var(--fs);
}

.hero-banner .img-container .img-presentation {
    width: 100%;
}

.what-is-honokokona {
    background: var(--bg-second);
    color: var(--color-second);
    padding-top: 24px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.what-is-honokokona .text {
    text-align: center;
    font-size: var(--fs);
    width: 60%;
}

.what-is-honokokona .img-presentation {
    border-radius: 50%;
    width: 200px;
    border: solid 3px transparent;
}

.what-is-honokokona .img-presentation:hover {
    border: solid 3px var(--color-three);
}

.products {
    background: var(--bg);
    color: var(--color);
    padding: 24px;
}

.products .container {
    display: flex;
    justify-content: space-around;
}

.products .container .box {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    font-size: var(--fs);
    color: var(--color);
}

.products .container .img-presentation {
    width: 100%;
    border: solid 2px transparent;
    border-radius: 12px;
}

.products .container .img-presentation:hover {
    border: solid 2px var(--color-three);
}

@media screen and (max-width: 800px) {
    .hero-banner {
        display: flex;
        flex-direction: column;
    }

    .products .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }

    .products .container .box {
        width: 100% !important;
    }
}

</style>