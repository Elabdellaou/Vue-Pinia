<template>
  <v-footer class="" style="border-top: 1px solid rgba(000, 000, 000, 0.12)">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in routes"
        :key="link.name"
        color="dark"
        variant="text"
        class="mx-2"
        rounded="xl"
        @click="redirect(link.name)"
      >
        {{ link.name }}
      </v-btn>
    </v-row>
  </v-footer>
</template>
<script setup>
import routes from "@/router/router";
import router from "@/router/index"
function redirect(name){
    router.push({name:name})
}
</script>
