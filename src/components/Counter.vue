<template>
    <div class="d-flex justify-center flex-column align-center mt-3">
        <v-btn class="text-h5">
            {{store.count}}
        </v-btn>
        <div class="d-flex flex-row mt-3">
            <v-btn icon class="me-1" @click="store.decrement">
                <v-icon color="info" icon="mdi-minus"></v-icon>
            </v-btn>
            <v-btn icon class="ms-1" @click="store.increment">
                <v-icon color="info" icon="mdi-plus"></v-icon>
            </v-btn>
        </div>
    </div>
</template>
<script setup>
import {ref} from "vue"
import {useCounterStore} from "@/store/counter/index"
const store=useCounterStore()
// const props = defineProps({
//     "firstName":"Ibrahim",
//     "lastName":"ELABDELLAOUI"
// })
// console.log(props)
</script>