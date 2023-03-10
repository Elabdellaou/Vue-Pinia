<template>
  <v-card class="mt-3 card-info" max-width="344" variant="outlined">
    <v-card-item>
      <div>
        <!-- <div class="text-overline mb-1">My info</div> -->
        <div class="text-h6 mb-1">My info</div>
        <div class="text-caption d-flex flex-column">
          <span class="text-left"
            >First Name : {{ props.user.firstName }}</span
          >
          <span class="text-left"
            >Last Name : {{ props.user.lastName }}</span
          >
          <span class="text-left"
            >Date Birthday : {{ props.user.dateBirthday }}</span
          >
          <span class="text-left">Age : {{ props.user.age }}</span>
        </div>
      </div>
    </v-card-item>
    <v-card-actions>
      <v-btn variant="outlined" @click="user(props.user.id)"> Edit </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { defineProps } from "vue";
import router from "@/router/index"

const props = defineProps({
  user: Object,
});

function user(id){
    router.push({name:"userEdit",params:{id : id}})
}
</script>
