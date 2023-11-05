<template>
    <div>
        <div class="title">
            <h1> Our products: </h1>
        </div>
        <div class="products">
            <div>
                <RouterLink to="/product/food-supplements-honokowhey" class="route">
                    <img loading="eager" src="@/assets/honokowhey.webp" alt="Honokowhey product based on Honokokona" class="img-presentation">
                    <p> Honokowhey 15€ / 500g</p>
                </RouterLink>
            </div>
            <div>
                <RouterLink to="/product/capsules-honokogellules" class="route">
                    <img loading="eager" src="@/assets/honokogellules.webp" alt="Honokogellules product based on Honokokona" class="img-presentation">
                    <p> Honokogellules 8,99€ (60 per pack) </p>
                </RouterLink>
            </div>
            <div>
                <RouterLink to="/product/sports-nutrition-honokobars" class="route">
                    <img loading="eager" src="@/assets/honokobarres.webp" alt="Honokobar product based on Honokokona" class="img-presentation">
                    <p> Honokobar 8,99€ / 6 * 55g </p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Honokonutrition\'s products based on Honokokona',
    ogTitle: 'Honokonutrition\'s products based on Honokokona',
    description: 'This is the products page, where we propose three different products based on Honokokona. Honokokona is a spice from Japan, very popular among dragons.',
    ogDescription: 'This is the products page, where we propose three different products based on Honokokona. Honokokona is a spice from Japan, very popular among dragons.',
    ogImage: '@/assets/honokowhey.webp',
});
</script>

<style scoped>
.title {
    text-align: center;
    padding: 24px;
}

.products {
    display: flex;
    justify-content: center;
    gap: 24px;
    font-size: var(--fs);
}

.products div {
    width: 30%;
    cursor: pointer;
}

.products .route {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: var(--color);
}

.img-presentation {
    width: 100%;
    border-radius: 12px;
    border: solid 2px transparent;
}

.img-presentation:hover {
    border: solid 2px var(--color-three);
}

@media screen and (max-width: 800px) {
    .products {
        flex-direction: column;
        align-items: center;
    }
    
    .products div {
        width: 80%;
    }
}
</style>