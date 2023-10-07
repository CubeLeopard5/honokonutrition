<template>
    <div class="background">
        <div class="title">
            <slot name="title"/>
        </div>
        <div class="blog-text-content">
            <slot name="content"/>
        </div>
    </div>
</template>

<style scoped>
.background {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.background h1 {
    margin: 0;
}

.title {
    padding: 24px;
    text-align: center;
}

.blog-text-content {
    display: flex;
    flex-direction: column;
    width: 75%;
    text-align: justify;
    font-size: var(--fs);
}
</style>