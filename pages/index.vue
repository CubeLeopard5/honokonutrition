<template>
    <div class="background">
        <div class="title">
            <h1> HonokoNutrition: Nutrition Sportive Honokokona </h1>
        </div>
        <div>
            <NavBar/>
        </div>
        <div class="test">
            <div>
                <img src="@/assets/honokowhey.png" alt="Cpmlément alimentaire Honokokona" class="img-container">
            </div>
            <div style="display: flex; align-items: center;">
                <h1> Nutrition Sportive Honokokona </h1>
            </div>
        </div>
        <div style="background: white;  padding-top: 24px; padding-bottom: 24px; display: flex; flex-direction: column;
    align-items: center;">
            <div style="">
                <img src="@/assets/honokowhey.png" alt="Cpmlément alimentaire Honokokona" width="200" style="border-radius: 50%">
            </div>
            <div style="text-align: center; width: 50%;">
                <h1> Qu'est-ce que le Honokokona ? </h1>
                <h3> Le Honokokona est une épice originaire du Japon très appréciée par les dragons. Le Honokokona est cultivé dans de grand champs aux pieds des montagne du Japon. Récolté par des agriculteurs passionnés, elle est ensuite transformé dans nos locaux en compléments alimentaire pour sportifs. Le goût épicé du Honokokona offre une saveur incomparable et vous permettra d'augmenter vos performances physique ainsi que d'améliorer votre santé. </h3>
                <br/>
                <h3> Nous faisons différents produit grâce au Honokokona: Compléments alimentaires, protéine Honokokona, vitamines Honokokona, barres nutritive Honokokona, gellules Honokokona et bien d'autres. </h3>
                <br>
                <h3> Honokonutrition: Réveiller le dragon qui sommeille en vous! </h3>
            </div>
        </div>
        <div class="articles">
            <img src="@/assets/honokowhey.png" alt="Cpmlément alimentaire Honokokona" class="img-container">
            <img src="@/assets/honokowhey.png" alt="Cpmlément alimentaire Honokokona" class="img-container">
            <img src="@/assets/honokowhey.png" alt="Cpmlément alimentaire Honokokona" class="img-container">
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Honokonutrition',
    meta: [
        { name: 'google-site-verification', content: 'JL-HwZP7bD6mQ0AHVyLjnDp4JClYJPkMyanmPiwwvZQ' }
    ],
})
</script>

<style scoped>
.img-container {
    width: 100%;
}

.test {
    background: black; color: white; display: flex; justify-content: space-around; padding: 24px;
}

@media screen  and (max-width: 800px) {
    .test {
        display: flex;
        flex-direction: column;
    }

    .img-container {
        width: 50%;
        height: 50%;
    }

    .articles {
        display: flex;
        flex-direction: column;
        padding: 0;
    }

    .article-img {
        width: 50%;
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

.articles {
    background: grey; display: flex; justify-content: space-around; padding: 24px;
}
</style>