<template>
    <div class="background">
        <div class="title">
            <h1> HonokoNutrition: Nutrition Sportive Honokokona </h1>
        </div>
        <div>
            <NavBar/>
        </div>
        <div class="hero-banner">
            <div class="img-container">
                <img src="@/assets/honokowhey.webp" alt="Complément alimentaire Honokokona" width="631" height="631" class="img-presentation">
            </div>
            <div class="title">
                <h1> Nutrition Sportive Honokokona </h1>
            </div>
        </div>
        <div class="what-is-honokokona">
            <div>
                <img src="@/assets/honokowhey.webp" alt="Cpmlément alimentaire Honokokona" width="631" height="631" class="img-presentation">
            </div>
            <div class="text">
                <h1> Qu'est-ce que le Honokokona? </h1>
                <p> Le Honokokona est une épice originaire du Japon très appréciée par les dragons. Le Honokokona est cultivé dans de grand champs aux pieds des montagne du Japon. Récolté par des agriculteurs passionnés, elle est ensuite transformé dans nos locaux en compléments alimentaire pour sportifs. Le goût épicé du Honokokona offre une saveur incomparable et vous permettra d'augmenter vos performances physique ainsi que d'améliorer votre santé. </p>
                <br/>
                <p> Nous faisons différents produit grâce au Honokokona: Compléments alimentaires, protéine Honokokona, vitamines Honokokona, barres nutritive Honokokona, gellules Honokokona et bien d'autres. </p>
                <br>
                <p> Honokonutrition: Réveiller le dragon qui sommeille en vous! </p>
            </div>
        </div>
        <div class="products">
            <div>
                <h1> Nos produits: </h1>
            </div>
            <div class="container">
                <div class="box">
                    <img src="@/assets/honokowhey.webp" alt="Cpmlément alimentaire Honokokona" class="img-presentation">
                    <p> Honokowhey </p>
                </div>
                <div class="box">
                    <img src="@/assets/honokowhey.webp" alt="Cpmlément alimentaire Honokokona" class="img-presentation">
                    <p> Honokogellules </p>
                </div>
                <div class="box">
                    <img src="@/assets/honokowhey.webp" alt="Cpmlément alimentaire Honokokona" class="img-presentation">
                    <p> Honokobarre </p>
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
}

.products .container .img-presentation {
    width: 100%;
}
</style>