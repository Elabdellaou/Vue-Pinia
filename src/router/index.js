import { createRouter,createWebHashHistory } from "vue-router";
import router from"@/router/router"

export default createRouter({
    history:createWebHashHistory(),
    routes:router
})