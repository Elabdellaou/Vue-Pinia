<template>
  <v-layout>
    <header-bar></header-bar>
    <v-main class="d-flex h-screen flex-column">
      <v-container class="h-100">
        <router-view></router-view>
      </v-container>
      <footer-bar></footer-bar>
    </v-main>
  </v-layout>
</template>

<script setup>
import headerBar from "@/components/Header.vue";
import footerBar from "@/components/Footer.vue";
</script>
