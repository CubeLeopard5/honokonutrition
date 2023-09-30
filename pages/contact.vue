<template>
    <div class="background">
        <div class="title">
            <h1> Contact us </h1>
            <div>
                <img src="@/assets/honokowhey.webp" alt="Complément alimentaire Honokokona" style="width: 30%; border-radius: 50%;">
                <p> Honoko Nutrition </p>
            </div>
            <p> Send us a message. We would love hearing your feedbacks, we always improve ourselves to give you the best products. </p>
            <div style="display: flex; justify-content: center;">
                <form action="" class="fake-form">
                    <h2> Email </h2>
                    <input type="text" style="height: 28px;"/>
                    <h2> Subject </h2>
                    <input type="text" style="height: 28px;"/>
                    <h2> Message </h2>
                    <textarea name="" id="" cols="30" rows="10"/>
                </form>
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
    width: 97.5vw;
}

.title {
    text-align: center;
    font-size: 24px;
}

.fake-form {
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 24px;
}
</style>