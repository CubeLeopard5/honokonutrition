<template>
    <div>
        <div class="title">
            <h1> Contact us: </h1>
        </div>
        <div class="presentation">
            <img src="@/assets/honokowhey.webp" alt="Honokokona dietary supplement rounded" class="img-presentation">
        </div>
        <div class="container">
            <p> Send us a message. We would love hearing your feedbacks, we always improve ourselves to give you the best products. </p>
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
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Honokonutrition\'s contact page',
    ogTitle: 'Honokonutrition\'s contact page',
    description: 'This is the contact page, where people can send us some messages for us or to ask questions about Honokokona.',
    ogDescription: 'This is the contact page, where people can send us some messages for us or to ask questions about Honokokona.',
    ogImage: '@/assets/honokowhey.webp',
});
</script>

<style scoped>
.title {
    text-align: center;
}

.presentation {
    display: flex;
    justify-content: center;
}

.presentation .img-presentation {
    width: 30%;
    border-radius: 50%;
    border: solid 2px transparent;
}

.presentation .img-presentation:hover {
    border: solid 2px var(--color-three);
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--fs);
    padding: 24px;
}

.fake-form {
    display: flex;
    flex-direction: column;
    width: 60%;
}

@media screen and (max-width: 800px) {
    .presentation .img-presentation {
        width: 80%;
    }

    .fake-form {
        width: 100%;
    }
}
</style>