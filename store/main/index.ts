import { defineStore } from 'pinia';

interface ShopItem {
    name: string,
    price: number,
}

export const useMainStore = defineStore({
    id: 'main-store',
    state: () => {
        return {
            basketItems: [] as Array<ShopItem>,
        }
    },
    actions: {
        addShopItemToBasket(shopItem: ShopItem) {
            if (this.basketItems === undefined) {
                this.basketItems = [];
            }
            if (this.basketItems.includes(shopItem)) {
                return;
            }
            this.basketItems.push(shopItem);
        }
    },
    getters: {
        getHonokogellules: (state) => state.basketItems.filter((item) => item.name === "Honokogellules"),
        getHonokobar: (state) => state.basketItems.filter((item) => item.name === "Honokobar"),
        getHonokowhey: (state) => state.basketItems.filter((item) => item.name === "Honokowhey"),
    },
    persist: true,
})