<template>
    <div class="background">
        <div class="title">
            <h1> Honoko Nutrition: Nutrition Sportive Honokokona </h1>
        </div>
        <div class="sub-title">
            <h2> Nos produits: </h2>
        </div>
        <div class="products">
            <div>
                <RouterLink to="/product/honokowhey" class="route">
                    <img src="@/assets/honokowhey.webp" alt="Complément alimentaire Honokokona" class="img-presentation">
                    <p> Honokowhey </p>
                </RouterLink>
            </div>
            <div>
                <RouterLink to="/product/honokogellules" class="route">
                    <img src="@/assets/honokogellules.webp" alt="Complément alimentaire Honokokona" class="img-presentation">
                    <p> Honokogellules </p>
                </RouterLink>
            </div>
            <div>
                <RouterLink to="/product/honokobarres" class="route">
                    <img src="@/assets/honokobarres.webp" alt="Complément alimentaire Honokokona" class="img-presentation">
                    <p> Honokobarres </p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
    background: black;
    min-height: 96vh;
    color: white;
    padding: 24px;
}

.title {
    text-align: center;
}

.products {
    display: flex;
    justify-content: center;
    gap: 24px;
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
    color: white;
}

.img-presentation {
    width: 100%;
    border-radius: 12px;
    border: solid 2px transparent;
}

.img-presentation:hover {
    border: solid 2px gold;
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