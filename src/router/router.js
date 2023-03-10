import Home from "@/pages/Home.vue"
import Account from "@/pages/Account.vue"
import Users from "@/pages/Users.vue"
import EditUser from "@/pages/EditUSer.vue"

export default [
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    {
        path: "/",
        redirect: to => {
            return { path: '/home' }
        },
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: {}
    },
    {
        path: "/account",
        name: "Account",
        component: Account,
        meta: {}
    },
    {
        path: "/users",
        name: "Users",
        component: Users,
        meta: {}
    },
    {
        // path: "/user/:id(\\d+)/edit",
        path: "/user/:id?/edit",
        name:"userEdit",
        component:EditUser,
        meta:{}
    }
];