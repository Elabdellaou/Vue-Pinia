<template>
  <h3 class="text-center">Users Page</h3>
  <v-row class="d-flex container-cards justify-space-between flex-row">
    <v-col cols="4" v-for="user in userStore.users" :key="user.id">
      <card-info class="card-style" :user="user"></card-info>
    </v-col>
  </v-row>
</template>

<script setup>
import { useUsersStore } from "@/store/users/index";
import CardInfo from "@/components/CardInfo.vue";

const userStore = useUsersStore();
</script>
<style scoped>
.container-cards .card-style:nth-child(even) {
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}
</style>
