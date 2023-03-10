<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    class=""
    @click="rail = false"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
      nav
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="Home"
        value="home"
        @click="redirect('/home')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="My Account"
        value="account"
        @click="redirect('/account')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="Users"
        value="users"
        @click="redirect('/users')"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import { ref } from "vue";
import router from "@/router/index"
let drawer = ref(true);

let items = ref([
    { title: "Home", icon: "mdi-home-city" },
    { title: "My Account", icon: "mdi-account" },
    { title: "Users", icon: "mdi-account-group-outline" },
]);

let rail = ref(true);

function redirect(path){
    router.push({path:path})
}
</script>
