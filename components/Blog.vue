<template>
    <div class="background">
        <div class="website-title">
            <h1> HonokoNutrition: Nutrition Sportive Honokokona </h1>
        </div>
        <div class="navbar">
            <NavBar/>
        </div>
        <div class="title">
            <slot name="title"/>
        </div>
        <div class="text-content">
            <slot name="content"/>
        </div>
    </div>
</template>

<style scoped>
.background {
    background: black;
    min-height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.background h1 {
    margin: 0;
}

.website-title {
    padding-top: 24px;
    text-align: center;
}

.navbar {
    width: 100%;
    padding-top: 24px;
}

.title {
    padding: 24px;
    text-align: center;
}

.text-content {
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    width: 75%;
    text-align: justify;
}
</style>