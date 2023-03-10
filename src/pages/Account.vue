<template>
  <h3 class="text-center">Account Page</h3>
  <div class=" d-flex justify-center">
    <card-info :user="userStore.userActive"></card-info>
  </div>
</template>

<script setup>
import { useUsersStore } from "@/store/users/index";
import CardInfo from "@/components/CardInfo.vue"

const userStore = useUsersStore();
</script>
<style scoped>
  .card-info{
    width: 344px;
  }
</style>
