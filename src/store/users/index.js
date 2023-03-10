import { defineStore } from "pinia";
import state from "@/store/users/state"
import actions from "@/store/users/actions"
import getters from "@/store/users/getters";

export const useUsersStore = defineStore("users", {
    state: () => (state),
    actions:actions,
    getters:getters,
})