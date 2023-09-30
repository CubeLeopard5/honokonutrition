<template>
    <div class="background">
        <div class="title">
            <h1> Honoko Nutrition: Sports Nutrition Honokokona </h1>
        </div>
        <div>
            <NavBar/>
        </div>
        <div class="hero-banner">
            <div class="img-container">
                <img src="@/assets/honokowhey.webp" alt="Complément alimentaire Honokokona" class="img-presentation">
            </div>
            <div class="title">
                <h1> Sports Nutrition Honokokona </h1>
            </div>
        </div>
        <div class="what-is-honokokona">
            <div>
                <img src="@/assets/honokowhey.webp" alt="Cpmlément alimentaire Honokokona" width="200" height="200" class="img-presentation">
            </div>
            <div class="text">
                <h1> What is Honokokona? </h1>
                <p style="font-size: 24px;"> Honokokona is a spice native to Japan highly appreciated by dragons. Honokokona is cultivated in large fields at the foot of Japanese mountains. Harvested by passionate farmers, it is then transformed in our facilities into dietary supplements for athletes. The spicy taste of Honokokona offers an incomparable flavor and will allow you to increase your physical performance as well as improve your health. </p>
                <br/>
                <p style="font-size: 24px;"> We produce various products using Honokokona: dietary supplements, Honokokona protein, Honokokona vitamins, Honokokona nutrition bars, Honokokona capsules, and many more. </p>
                <br>
                <p style="font-size: 24px;"> Honokonutrition: Awaken the dragon within you! </p>
            </div>
        </div>
        <div class="products">
            <div>
                <h1> Our products: </h1>
            </div>
            <div class="container">
                <div class="box">
                    <img src="@/assets/honokowhey.webp" alt="Cpmlément alimentaire Honokokona" class="img-presentation">
                    <p> Honokowhey 15€ / 500g</p>
                </div>
                <div class="box">
                    <img src="@/assets/honokogellules.webp" alt="Cpmlément alimentaire Honokokona" class="img-presentation">
                    <p> Honokogellules 8,99€ (60 per pack) </p>
                </div>
                <div class="box">
                    <img src="@/assets/honokobarres.webp" alt="Cpmlément alimentaire Honokokona" class="img-presentation">
                    <p> Honokobar 8,99€ / 6 * 55g </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-banner {
    background: black;
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 24px;
}

.hero-banner .img-container {
    display: flex;
    justify-content: center;
}

.hero-banner .img-container .img-presentation {
    width: 100%;
}

.hero-banner .title {
    display: flex;
    align-items: center;
}

.what-is-honokokona {
    background: white;
    padding-top: 24px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.what-is-honokokona .text {
    text-align: center;
    width: 60%;
}

.what-is-honokokona .img-presentation {
    border-radius: 50%;
}

@media screen and (max-width: 800px) {
    .hero-banner {
        display: flex;
        flex-direction: column;
    }

    .hero-banner .title {
        justify-content: center;
    }

    .title {
        text-align: center;
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

    .hero-banner .img-container .img-presentation {
        display: none;
    }
}

.background {
    background: black;
    min-height: 100vh;
}

.title h1 {
    color: white;
    margin: 0;
    padding: 24px;
}

.products {
    background: grey;
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
    font-size: 24px;
}

.products .container .img-presentation {
    width: 100%;
    border-radius: 12px;
}
</style>