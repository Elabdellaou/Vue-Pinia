import { defineStore } from "pinia";
import getters from "@/store/counter/getters"
import actions from "@/store/counter/actions"

export const useCounterStore = defineStore("counter", {
    state: () => ({
        count: 0,
    }),
    getters: getters,
    actions: actions,
})


