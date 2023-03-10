<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="user.firstName"
            :counter="3"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="4">
          <v-text-field
            v-model="user.lastName"
            :counter="3"
            label="Last name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="user.age" label="Age" required></v-text-field>
        </v-col>
        <!-- <v-col cols="4">
          <v-btn>Update</v-btn>
        </v-col> -->
      </v-row>
    </v-container>
  </v-form>
</template>
<script setup>
import { ref, watch } from "vue";
import { useUsersStore } from "@/store/users/index";
import { useRoute } from "vue-router";

const route = useRoute();
let valid = ref(false);
const userStore = useUsersStore();

let user = ref({
  id: 0,
  firstName: "",
  lastName: "",
  age: 0,
  dateBirthday: "",
});
// console.log(userStore.getUser(route.params.id))
user.value = !isNaN(route.params.id)
  ? userStore.getUser(route.params.id)
  : userStore.userActive;
</script>
