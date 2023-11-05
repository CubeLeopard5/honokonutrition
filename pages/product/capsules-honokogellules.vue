<template>
    <div>
        <Blog>
            <template #title>
                <h1> Honokogellules </h1>
            </template>
            <template #content>
                <p> Discover Honokogellules, a revolutionary dietary supplement encapsulating the power of Honokokona, Japan's secret spice. These small yet mighty capsules are designed to help you unlock your full potential, whether you're an athlete striving for peak performance or an individual seeking better health and vitality. </p>
                <p> Taking Honokogellules is a journey toward improved vitality and well-being. With every capsule, you're embarking on a path to enhanced physical and mental performance. These easy-to-swallow capsules fit seamlessly into your daily routine, ensuring you stay on track toward your health and fitness goals. </p>
                <p> Unlock your potential with Honokogellules. Each capsule encapsulates the spirit of Japan, the vitality of the Honokokona spice, and the promise of a healthier, more energized you. Whether you're pursuing athletic excellence or simply striving for a vibrant life, Honokogellules are your partner on the journey. Try Honokogellules today and experience the transformational power of this exceptional dietary supplement—one capsule at a time. Elevate your life, unlock your potential, and embrace a brighter, healthier future with Honokogellules. </p>
                <div style="display: flex; justify-content: center;">
                    <img loading="lazy" src="@/assets/honokogellules.webp" alt="Honokogellules product based on Honokokona" class="img-presentation">
                </div>
            </template>
        </Blog>
        <div class="add-basket" @click="store.addShopItemToBasket({ name: 'Honokogellules', price: 8.99 })">
            <p> Add to basket (8,99€) {{ store.getHonokogellules.length }} </p>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '~/store/main';

const store = useMainStore();
useSchemaOrg([
    defineProduct({
        name: 'Honokogellules',
        description: "Discover Honokogellules, a revolutionary dietary supplement encapsulating the power of Honokokona, Japan's secret spice.",
        image: [
            '/assets/honokogellules.webp'
        ],
        offers: [
            {
                priceCurrency: "EUR",
                availability: "http://schema.org/InStock",
                price: 8.99,
                priceValidUntil: "2023-11-30T00:00:00+00:00"
            },
        ],
    })
]);
useSeoMeta({
    title: 'Honokonutrition\'s Honokogellules page',
    ogTitle: 'Honokonutrition\'s Honokogellules page',
    description: 'This is the Honokogellules product page, we talk about it and say how this product will give you improvements to your performances.',
    ogDescription: 'This is the Honokogellules product page, we talk about it and say how this product will give you improvements to your performances.',
    ogImage: '@/assets/honokowhey.webp',
});
</script>

<style scoped>
@media screen and (max-width: 800px) {
    .add-basket {
        font-size: 12px !important;
        margin-right: 10% !important;
        margin-left: 10% !important;
    }
}

.img-presentation {
    width: 50%;
    border-radius: 12px;
}

.add-basket {
    display: flex;
    justify-content: center;
    cursor: pointer;
    background: #c4342d;
    margin-right: 40%;
    margin-left: 40%;
    font-size: 24px;
    margin-bottom: 24px;
}
</style>