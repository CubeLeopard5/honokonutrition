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
                <h2> The Birth of Honokonutrition: </h2>

<p> In the heart of rural Japan, nestled at the base of the majestic mountains, Honokonutrition had its humble beginnings. The year was 1995 when a visionary named Hiroshi Takahashi, who had a deep appreciation for the unique spices of his homeland, decided to embark on a culinary journey that would eventually lead to the creation of Honokonutrition. </p>

<h2> Discovery of the Honokokona Spice:</h2>

<p> Hiroshi Takahashi had always been fascinated by the rich history of Japanese cuisine and its intricate use of spices. However, one spice, in particular, caught his attention – the Honokokona. It was an exotic spice that had been cherished by Japanese culture for centuries but remained relatively unknown to the rest of the world. This rare spice was believed to have unique properties, and folklore even spoke of its connection to the mythical dragons of Japan. </p>

<h2> Passionate Farming and Innovation:</h2>

<p> Determined to unlock the potential of the Honokokona spice, Hiroshi Takahashi embarked on a quest to cultivate it in larger quantities. He partnered with local farmers who shared his passion for this extraordinary spice. Together, they established vast fields at the base of the mountains to grow the elusive Honokokona. </p>

<p> Over the years, through rigorous experimentation and dedication, they developed sustainable farming practices that allowed for the growth of premium Honokokona. These practices ensured that the spice retained its distinct flavor and nutritional properties. </p>

<h2> Transformation into Nutritional Products:</h2>

<p> As the supply of Honokokona grew, Hiroshi Takahashi recognized the immense potential of this spice to benefit not only Japanese cuisine but also people's health and performance. Honokokona was rich in unique compounds known for their potential to enhance physical endurance and well-being. </p>

<p> In collaboration with nutritionists and experts, Honokonutrition's research and development team worked tirelessly to create a range of products that incorporated the Honokokona spice. They developed dietary supplements, protein powders, vitamins, nutrition bars, and capsules, each infused with the fiery essence of the Honokokona. </p>

<h2> Expanding Worldwide:</h2>

<p> With the quality and effectiveness of their products proven through extensive testing, Honokonutrition expanded its reach beyond Japan's borders. In the early 2000s, their products began to gain popularity among athletes and health enthusiasts worldwide. </p>

<h2> Honokonutrition Today:</h2>

<p> Today, Honokonutrition is a global brand known for its commitment to quality and its dedication to harnessing the power of the Honokokona spice. It continues to be headquartered in the picturesque landscapes of rural Japan, where the tradition of cultivating and transforming Honokokona into exceptional nutritional products remains a core value. </p>

<p> Honokonutrition's mission remains simple yet powerful: to awaken the dragon that lies within every individual, helping them achieve their health and fitness goals through the extraordinary benefits of the Honokokona spice. </p>
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