<template>
    <div>
        <Blog>
            <template #title>
                <h1> Honokowhey </h1>
            </template>
            <template #content>
                <p> At the heart of Honokowhey lies the fusion of two worlds—pure whey protein, renowned for its muscle-building properties, and the enigmatic Honokokona spice, celebrated for its unique taste and potential health benefits. Sourced from the picturesque fields at the base of Japanese mountains, Honokowhey encapsulates the essence of Japan in every scoop. </p>
                <p> Picture yourself sipping on a delicious Honokowhey shake—a blend of creamy goodness and the unmistakable zing of Honokokona spice. It's not just a protein supplement; it's an experience that fuels your body and your senses. Honokowhey fits seamlessly into your daily routine, ensuring you have the energy and stamina to tackle your workouts and daily activities. </p>
                <p> Honokowhey is a testament to the commitment of Honokonutrition in bringing the best of Japan to the world. We've taken the wisdom of Japanese cuisine and combined it with cutting-edge nutritional science to create a protein powder that elevates your fitness journey to a whole new level. </p>
                <div style="display: flex; justify-content: center;">
                    <img src="@/assets/honokowhey.webp" alt="Honokowhey product based on Honokokona" class="img-presentation">
                </div>
            </template>
        </Blog>
        <div class="add-basket" @click="store.addShopItemToBasket({ name: 'Honokowhey', price: 14.99 })">
            <p> Add to basket (14,99€) {{ store.getHonokowhey.length }} </p>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '~/store/main';

const store = useMainStore();
useSchemaOrg([
    defineProduct({
        name: 'Schema.org Book',
        description: 'Discover how to use Schema.org',
        image: [
            '/assets/honokowhey.webp'
        ],
        offers: [
            {
                price: 50
            },
        ],
    })
]);
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