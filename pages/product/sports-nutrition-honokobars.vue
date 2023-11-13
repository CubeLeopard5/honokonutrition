<template>
  <div>
    <Blog>
      <template #title>
        <h1>Nutrition sportive: Honokobar</h1>
      </template>
      <template #content>
        <p>
          At the heart of the Honokobar lies the secret ingredient that sets it
          apart—Honokokona spice. Sourced from the lush fields at the base of
          Japanese mountains, this extraordinary spice has been celebrated for
          centuries for its remarkable taste and potential health benefits. Its
          unique, spicy flavor profile gives the Honokobarre a distinctive edge
          that ignites your taste buds and keeps you coming back for more.
        </p>
        <p>
          Honokobar is not just about flavor; it's about fueling your body for
          peak performance. Packed with essential nutrients, including protein,
          vitamins, and minerals, this nutrition bar provides the sustenance
          your body craves during intense workouts or busy days on the go. It's
          the perfect companion for athletes, fitness enthusiasts, and anyone
          seeking a convenient yet nourishing snack.
        </p>
        <p>
          In every Honokobarre, you'll discover the essence of Japan, the fiery
          spirit of the Honokokona spice, and the promise of enhanced vitality.
          Unleash your inner dragon with each bite and savor the adventure that
          comes with embracing the power of the Honokobarre. It's not just a
          snack; it's a taste of excellence, a boost of energy, and a
          celebration of a healthier, more vibrant you. Try Honokobarre today
          and elevate your snacking experience to new heights.
        </p>
        <div style="display: flex; justify-content: center">
          <nuxt-img
            width="100%"
            height="100%"
            loading="lazy"
            src="/honokobarres.webp"
            alt="Honokobar product based on Honokokona"
            class="img-presentation"
          />
        </div>
      </template>
    </Blog>
    <div
      class="add-basket"
      @click="store.addShopItemToBasket({ name: 'Honokobar', price: 8.99 })"
    >
      <p>Add to basket (8,99€) {{ store.getHonokobar.length }}</p>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/main";

const store = useMainStore();
useSchemaOrg([
  defineProduct({
    name: "Honokobarres",
    description:
      "At the heart of the Honokobar lies the secret ingredient that sets it apart—Honokokona spice.",
    image: ["/assets/honokobarres.webp"],
    offers: [
      {
        priceCurrency: "EUR",
        availability: "http://schema.org/InStock",
        price: 8.99,
        priceValidUntil: "2023-11-30T00:00:00+00:00",
      },
    ],
  }),
]);
useSeoMeta({
  title: "Honokonutrition's Honokobar page",
  ogTitle: "Honokonutrition's Honokobar page",
  description:
    "This is the Honokobar product page, you can find more information about it, it is made with Honokokona and will help you to be in good health.",
  ogDescription:
    "This is the Honokobar product page, you can find more information about it, it is made with Honokokona and will help you to be in good health.",
  ogImage: "@/assets/honokowhey.webp",
});
</script>

<style scoped>
@media screen and (max-width: 800px) {
  .add-basket {
    font-size: 12px !important;
    margin-right: 10% !important;
    margin-left: 10% !important;
  }
}

.img-presentation {
  width: 50%;
  border-radius: 12px;
}

.add-basket {
  display: flex;
  justify-content: center;
  cursor: pointer;
  background: #c4342d;
  margin-right: 40%;
  margin-left: 40%;
  font-size: 24px;
  margin-bottom: 24px;
}
</style>
