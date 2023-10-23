<template>
    <div>
        <nav class="navbar">
            <a href="/"> Home </a>
            <a href="/about"> About us </a>
            <a href="/products"> Products </a>
            <a href="/blogs"> Blog </a>
            <a href="/contact"> Contact </a>
            <span/>
        </nav>
        <a href="/basket" class="basket-button">
            <img src="@/assets/basket-svgrepo-com.svg" alt="basket icon" width="40px">
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
        height: 32px !important;
    }

    .navbar a {
        font-size: 12px !important;
        padding: 0 2px !important;
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
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222;
}

.navbar a {
    position: relative;
    display: inline-block;
    font-size: 1em;
    color: white;
    text-decoration: none;
    padding: 0 23px;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar span {
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background: linear-gradient(45deg, #913530, #c4342d);
    transition: .5s ease;
}

.navbar a:nth-child(1):hover~span {
    left: 0;
}

.navbar a:nth-child(2):hover~span {
    left: 20%;
}

.navbar a:nth-child(3):hover~span {
    left: 40%;
}

.navbar a:nth-child(4):hover~span {
    left: 60%;
}

.navbar a:nth-child(5):hover~span {
    left: 80%;
}

.basket-button {
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    background: #c4342d;
    margin-right: 40%;
    margin-left: 40%;
}
</style>