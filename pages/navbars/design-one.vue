<template>
    <div class="background">
        <nav class="navbar">
            <a href="#" @click="select(0)"> Home </a>
            <a href="#" @click="select(1)"> About </a>
            <a href="#" @click="select(2)"> Products </a>
            <a href="#" @click="select(3)"> Services </a>
            <a href="#" @click="select(4)"> Contact </a>
            <span :style="{ '--pos': `${selected * 100}px` }"/>
        </nav>
    </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
    setup() {
        let selected = ref(0);

        const select = (val) => {
            selected.value = val;
        }

        return {
            selected,
            select,
        }
    },
})
</script>


<style scoped>
.background {
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    height: 100vh;
    box-sizing: border-box;
}

.navbar {
    position: relative;
    width: 500px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
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
    left: var(--pos);
    width: 20%;
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(45deg, #2e3192, #1bffff);
    transition: .5s ease;
}

.navbar a:nth-child(1):hover~span {
    left: 0;
}

.navbar a:nth-child(2):hover~span {
    left: 100px;
}

.navbar a:nth-child(3):hover~span {
    left: 200px;
}

.navbar a:nth-child(4):hover~span {
    left: 300px;
}

.navbar a:nth-child(5):hover~span {
    left: 400px;
}
</style>