<template>
    <div class="background">
        <div class="title">
            <h1> About us </h1>
        </div>
        <div class="presentation">
            <img src="@/assets/honokowhey.webp" alt="Complément alimentaire Honokokona" class="img-presentation">
            <p> Honoko Nutrition </p>
        </div>
        <div style="display: flex; justify-content: center;">
            <div class="text-content">
                <h2> Notre histoire: </h2>
                <p> Il était une fois </p>
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

.presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.presentation .img-presentation {
    width: 30%;
    border-radius: 50%;
    border: solid 2px transparent;
}

.presentation .img-presentation:hover {
    border: solid 2px gold;
}

.text-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
}

@media screen and (max-width: 800px) {
    .presentation .img-presentation {
        width: 80%;
    }
}
</style>