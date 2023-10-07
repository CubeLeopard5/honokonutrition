<template>
    <div>
        <div class="main-title">
            <h1> Honoko Nutrition: Sports Nutrition With Honokokona </h1>
        </div>
        <div>
            <NavBar/>
        </div>
        <NuxtPage/>
        <div class="footer-alert">
            <p> THIS IS A STUDENT PROJECT,  MADE FOR EDUCATIONAL PURPOSES ONLY. </p>
        </div>
    </div>
</template>

<style scoped>
.main-title {
    display: flex;
    justify-content: center;
    color: var(--color);
    background: var(--bg);
    text-align: justify;
}

.footer-alert {
    background: var(--bg-three);
    color: var(--color-second);
    display: flex;
    justify-content: center;
    font-size: var(--fs);
    text-align: justify;
}
</style>