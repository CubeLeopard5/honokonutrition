<template>
    <div>
        <div class="title">
            <h1> Your basket: </h1>
        </div>
        <div class="products">
            <div v-if="store.getHonokogellules.length > 0">
                <p> Honokogellules x {{ store.getHonokogellules.length }} = {{ 8.99 * store.getHonokogellules.length }}€ </p>
            </div>
            <div v-if="store.getHonokobar.length > 0">
                <p> Honokobar x {{ store.getHonokobar.length }} = {{ 8.99 * store.getHonokobar.length }}€ </p>
            </div>
            <div v-if="store.getHonokogellules.length > 0">
                <p> Honokowhey x {{ store.getHonokowhey.length }} = {{ 14.99 * store.getHonokowhey.length }}€ </p>
            </div>
            <div class="buy-button">
                <p style="display: flex; justify-content: center;"> Buy {{ store.basketItems.reduce((acc, o) => acc + o.price, 0).toFixed(2) }}€ </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '~/store/main';

const store = useMainStore();
</script>

<style scoped>
.title {
    text-align: center;
    padding: 24px;
}

.products {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    font-size: var(--fs);
}

.buy-button {
    background: #c4342d;
    width: 20%;
}

@media screen and (max-width: 800px) {
    .buy-button {
        width: 80%;
    }
}
</style>