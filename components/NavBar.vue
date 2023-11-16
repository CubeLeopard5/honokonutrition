<template>
    <div>
        <nav class="navbar">
            <a href="/"> Home </a>
            <a href="/about"> About us </a>
            <a href="/products"> Products </a>
            <a href="/blogs"> Blogs </a>
            <a href="/contact"> Contact </a>
            <span/>
        </nav>
        <a href="/basket" class="basket-button">
        <nuxt-img
            width="40px"
            height="40px"
            src="/basket-svgrepo-com.svg"
            alt="basket icon"
        />
            <p> Your basket: {{ store.basketItems.reduce((acc, o) => acc + o.price, 0).toFixed(2) }}€ </p>
        </a>
    </div>
</template>

<script setup>
import { useMainStore } from '~/store/main';

const store = useMainStore();
</script>

<style scoped>
@media screen and (max-width: 800px) {
    .navbar {
        flex-direction: column;
        align-items: center;
    }

    .navbar a {
        width: 100% !important;
    }

    .basket-button {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10% !important;;
        margin-left: 10% !important;;
    }
}

.navbar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
}

.navbar a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 48px;
    color: white;
    border: solid 2px var(--color-three);
}

.navbar a:hover {
    background: linear-gradient(45deg, #913530, #c4342d);
}

.basket-button {
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    background: #c4342d;
    margin-right: 40%;
    margin-left: 40%;
    color: white;
}
</style>